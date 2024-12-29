import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
    subscribeToNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToNotes = () => {
    const subscription = supabase
      .channel('notes_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, 
        payload => {
          if (payload.eventType === 'INSERT') {
            setNotes(prev => [payload.new, ...prev]);
          } else if (payload.eventType === 'DELETE') {
            setNotes(prev => prev.filter(note => note.id !== payload.old.id));
          } else if (payload.eventType === 'UPDATE') {
            setNotes(prev => prev.map(note => 
              note.id === payload.new.id ? payload.new : note
            ));
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  };

  const addNote = async (content) => {
    const { data, error } = await supabase
      .from('notes')
      .insert([{ content, user_id: supabase.auth.user().id }]);

    if (error) throw error;
    return data;
  };

  const toggleFavorite = async (id) => {
    const note = notes.find(n => n.id === id);
    const { error } = await supabase
      .from('notes')
      .update({ is_favorite: !note.is_favorite })
      .eq('id', id);

    if (error) throw error;
  };

  const deleteNote = async (id) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) throw error;
  };

  return (
    <NotesContext.Provider value={{
      notes,
      loading,
      addNote,
      toggleFavorite,
      deleteNote
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};