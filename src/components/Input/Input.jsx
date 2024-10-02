import { useState } from "react";
import { List } from "../List/List";
import { nanoid } from 'nanoid'

const initialNotes = []

export const Input = () => {
    const [notes, setNotes] = useState(initialNotes)
    const [value, setValue] = useState('')

    const handleClickAdd = () => {
        const newNote = [{
            id: nanoid(),
            isChecked: false,
            title: value,
            isEdit: false,
        }]

        setNotes([...notes, newNote])
        setValue('')
    };

    const handleClickDel = (id) => {
        setNotes(notes.filter(i => i.id !== id))
    }

    const handleClickCheck = (id) => {
        
    }

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
            <button onClick={() => handleClickAdd()}>добавить</button>
            <List notes={notes} onRemove={handleClickDel} />
        </div>
    );
}
