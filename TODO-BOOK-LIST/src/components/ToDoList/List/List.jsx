import ListStyle from "./List.module.css"

export const List = ({ notes, onRemove, onCheked, onEdit, isEditInput }) => {

    return (
        <ul className={ListStyle.container}>
            {notes.map(note => (
                <li className={ListStyle.liContainer} key={note.id}>
                    <div className={ListStyle.containerFlex}>
                        <div>
                            <label className={ListStyle.customСheckbox}>
                                <input type="checkbox" checked={note.isChecked} onChange={() => onCheked(note.id)} />
                                <span className={ListStyle.checkmark}></span>
                            </label>
                            {note.isEdit ?
                                <input className={note.isChecked ? ListStyle.spanText : ListStyle.spanTextNone} onChange={e => isEditInput(note.id, e)} value={note.title} />
                                : <span className={note.isChecked ? ListStyle.spanText : ListStyle.spanTextNone}>{note.title}</span>}
                        </div>
                        <div className="">
                            <button className={ListStyle.btnEdit} onClick={() => onEdit(note.id)}></button>
                            <button className={ListStyle.btnDel} onClick={() => onRemove(note.id)}></button>
                        </div>
                    </div>
                    <div className={ListStyle.divLine}></div>
                </li>
            ))}
        </ul>
    );
};
