import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import WelcomePage from './components/landing/WelcomePage';
import BirthdayBanner from './pages/BirthdayBanner';
import PhotoGallery from './pages/PhotoGallery';
import LoveStory from './pages/LoveStory';
import './App.css';
import LoveQuiz from './components/quiz/LoveQuiz';
import { Layout } from './layout/Layout';
import WhyILoveYou from './pages/WhyILoveYou';
import { Login } from './auth/Login';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {


  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-pink-50">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route exact path="" element={<WelcomePage />} />
            <Route path='/' element={<Layout />}>
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              <Route path="/love-story" element={<LoveStory />} />
              <Route path="/why-i-love-you" element={<WhyILoveYou />} />
              <Route path='/love-quiz' element={<LoveQuiz />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;