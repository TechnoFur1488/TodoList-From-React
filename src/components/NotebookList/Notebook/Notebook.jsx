import { useState } from "react"
import { nanoid } from 'nanoid'
import NoteStyle from "./Notebook.module.css"
import { Note } from "../Note/Note"

export const Notebook = () => {
    const [notes, setNotes] = useState([])
    const [newNoteTitle, setNewNoteTitle] = useState('')
    const [currentNoteContent, setCurrentNoteContent] = useState('')

    const handleAddNote = () => {
        if (newNoteTitle.trim() && currentNoteContent.trim()) {
            const noteObj = {
                id: nanoid(),
                title: newNoteTitle,
                content: currentNoteContent
            }
            setNotes([...notes, noteObj])
            setNewNoteTitle('')
            setCurrentNoteContent('')
        }
    }

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const handleUpdateNote = (id) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, content: currentNoteContent } : note
        )
        setNotes(updatedNotes)
    }

    const handleClickSelect = (id) => {
        const selectedNote = notes.find(note => note.id === id)
        if (selectedNote) {
            setNewNoteTitle(selectedNote.title)
            setCurrentNoteContent(selectedNote.content)
        }
    }

    return (
        <div className={NoteStyle.container}>
            <input type="text" placeholder="Введите заголовок заметки" value={newNoteTitle} onChange={(e) => setNewNoteTitle(e.target.value)}/>
            <textarea placeholder="Введите содержимое заметки" value={currentNoteContent} onChange={(e) => setCurrentNoteContent(e.target.value)} 
                onBlur={() => {
                    const selectedNote = notes.find(note => note.title === newNoteTitle)
                    if (selectedNote) {
                        handleUpdateNote(selectedNote.id)
                    }
                }}
            />
            <button onClick={handleAddNote}>Добавить заметку</button>
            <div>
                {notes.map(note => (
                    <div key={note.id}>
                        <Note note={note} onDelete={handleDeleteNote} onSelect={() => handleClickSelect(note.id)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
