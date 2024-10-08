import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteStyle from "./Notebook.module.css";
import { Note } from "../Note/Note";

// let arr

// if (localStorage.getItem("Notebook")) {
//     arr = JSON.parse(localStorage.getItem("Notebook"))
// } else {
//     arr = []
// }


export const Notebook = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteContent, setNewNoteContent] = useState('');
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleAddNote = () => {
        if (newNoteTitle.trim() && newNoteContent.trim()) {
            const newNoteObj = {
                id: nanoid(),
                title: newNoteTitle,
                content: newNoteContent
            };
            setNotes([...notes, newNoteObj]);
            setNewNoteTitle('');
            setNewNoteContent('');
            // localStorage.setItem("Notebook", JSON.stringify(copy))
        }

    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
        if (selectedNoteId === id) {
            setSelectedNoteId(null);
            setNewNoteTitle(''); // Сброс заголовка
            setNewNoteContent(''); // Сброс содержимого
        }
    };

    const handleSelectNote = (note) => {
        setSelectedNoteId(note.id);
        setNewNoteTitle(note.title);
        setNewNoteContent(note.content);
    };

    const handleUpdateNote = () => {
        if (selectedNoteId) {
            const updatedNotes = notes.map(note => 
                note.id === selectedNoteId ? { ...note, title: newNoteTitle, content: newNoteContent } : note
            );
            setNotes(updatedNotes);
        }
    };

    return (
        <div className={NoteStyle.container}>
            <input 
                type="text" 
                value={newNoteTitle} 
                onChange={(e) => setNewNoteTitle(e.target.value)} 
                placeholder="Введите заголовок заметки" 
            />
            <textarea 
                value={newNoteContent} 
                onChange={(e) => setNewNoteContent(e.target.value)} 
                placeholder="Введите содержимое заметки" 
            />
            <button onClick={handleAddNote}>Добавить заметку</button>
            <button onClick={handleUpdateNote} disabled={!selectedNoteId}>Обновить заметку</button>
            <div>
                {notes.map(note => (
                    <div key={note.id}>
                        <Note 
                            note={note} 
                            onDelete={handleDeleteNote} 
                            onSelect={() => handleSelectNote(note)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
