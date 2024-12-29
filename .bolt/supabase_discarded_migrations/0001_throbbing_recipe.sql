/*
  # Create notes table and policies

  1. New Tables
    - `notes`
      - `id` (uuid, primary key)
      - `content` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
      - `is_favorite` (boolean)

  2. Security
    - Enable RLS on `notes` table
    - Add policies for authenticated users to:
      - Read all notes
      - Create their own notes
      - Update their own notes
      - Delete their own notes
*/

CREATE TABLE IF NOT EXISTS notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL,
  is_favorite boolean DEFAULT false
);

ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all notes"
  ON notes
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create their own notes"
  ON notes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notes"
  ON notes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own notes"
  ON notes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);