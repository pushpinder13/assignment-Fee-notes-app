
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  const addNote = () => {
    if (text.trim() !== '') {
      const newNote = {
        id: Date.now(),
        text,
      };
      setNotes([...notes, newNote]);
      setText('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <h1>Notes App</h1>

      <div className="input-container">
        <input
          type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter note" className="note-input"
        />

        <button onClick={addNote} className="add-button">
          Add Note
        </button>
      </div>
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="note-item">
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
