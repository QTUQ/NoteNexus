import React, { useState, createContext, useEffect } from "react";
import NoteNexusHeader from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
import { Layout } from "../AppColorTheme/Layout.js";
import { LIGHT, DARK, GREY } from "../AppColorTheme/colors.js";

export const ThemeContext = createContext(LIGHT);

function NotePage() {
  const [themeValue, setThemeValue] = useState(LIGHT);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from local storage on component mount
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // Save notes to local storage whenever they change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <Layout>
        <div className="settings">
          <select
            value={themeValue}
            onChange={event => setThemeValue(event.target.value)}
          >
            <option value={DARK}>{DARK}</option>
            <option value={LIGHT}>{LIGHT}</option>
            <option value={GREY}>{GREY}</option>
          </select>
          <NoteNexusHeader />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
          <Footer />
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default NotePage;
