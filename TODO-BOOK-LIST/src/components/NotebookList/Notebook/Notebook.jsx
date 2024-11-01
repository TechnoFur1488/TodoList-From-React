import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteStyle from "./Notebook.module.css";
import { Note } from "../Note/Note";
import { Link, useLoaderData } from "react-router-dom";


export async function loader() {
    let arr;
    
    if (localStorage.getItem("NoteB")) {
        arr = JSON.parse(localStorage.getItem("NoteB"));
    } else {
        arr = [];
    }

    return { arr }
}

export const Notebook = () => {
    const { arr } = useLoaderData()
    const [notes, setNotes] = useState(arr);
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [currentNoteContent, setCurrentNoteContent] = useState('');
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleAddNote = () => {
        if (newNoteTitle.trim() && currentNoteContent.trim()) {
            const note = {
                id: nanoid(),
                title: newNoteTitle,
                content: currentNoteContent
            };
            let copy = [...notes, note];
            setNotes(copy);
            setNewNoteTitle('');
            setCurrentNoteContent('');
            localStorage.setItem("NoteB", JSON.stringify(copy));
        }
    };

    const handleDeleteNote = (id) => {
        let copy = notes.filter(note => note.id !== id);
        setNotes(copy);
        localStorage.setItem("NoteB", JSON.stringify(copy));
    };

    const handleUpdateNote = (id, newContent) => {
        let copy = notes.map(note => {
            if (note.id === id) {
                return { ...note, content: newContent }; // Обновляем содержимое
            }
            return note;
        });
        setNotes(copy);
        localStorage.setItem("NoteB", JSON.stringify(copy));
    };

    const handleClickSelect = (id) => {
        const selectedNote = notes.find(note => note.id === id);
        if (selectedNote) {
            setNewNoteTitle(selectedNote.title);
            setCurrentNoteContent(selectedNote.content);
            setSelectedNoteId(id);
        }
    };

    const handleBlur = () => {
        if (selectedNoteId && currentNoteContent.trim()) {
            handleUpdateNote(selectedNoteId, currentNoteContent);
        }
    };


    return (
        <div className={NoteStyle.container}>
            <Link to={"/"}><button className={NoteStyle.btnRouter}>TODO LIST</button></Link>
            <h1>NOTEBOOK</h1>
            <input
                className={NoteStyle.input}
                type="text"
                placeholder="Введите заголовок заметки"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
            />
            <textarea
                className={NoteStyle.textarea}
                placeholder="Введите содержимое заметки"
                value={currentNoteContent}
                onChange={(e) => setCurrentNoteContent(e.target.value)}
                onBlur={handleBlur}
            />

            <button className={NoteStyle.btn} onClick={handleAddNote}>Добавить заметку</button>
            <div>
                {notes.map(note => (
                    <div key={note.id}>
                        <Note
                            note={note}
                            onDelete={handleDeleteNote}
                            onSelect={() => handleClickSelect(note.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
