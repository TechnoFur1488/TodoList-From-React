import { useState } from "react";
import ListStyle from "./List.module.css"

export const List = ({ notes, onRemove, onCheked, onEdit, isEditInput }) => {

    // const [value, setValue] = useState("")

    return (
        <ul className={ListStyle.container}>
            {notes.map(note => (
                <li className={ListStyle.liContainer} key={note.id}>
                    <div className={ListStyle.containerFlex}>
                        <div>
                            <input type="checkbox" checked={note.isChecked} onChange={() => onCheked(note.id)} />
                            {note.isEdit ? <input onChange={e => isEditInput(note.id, e)} value={note.title} /> : <span>{note.title}</span>}
                        </div>
                        <div>
                            <button onClick={() => onRemove(note.id)}>удалить</button>
                            <button onClick={() => onEdit(note.id)}>Редакт</button>
                        </div>
                    </div>
                    <div className={ListStyle.divLine}></div>
                </li>
            ))}
        </ul>
    );
};
