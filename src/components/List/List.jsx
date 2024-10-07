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
                            <button className={ListStyle.btnEdit} onClick={() => onEdit(note.id)}><img className={ListStyle.edit} src="./images/Frame 6.svg" alt="" /></button>
                            <button className={ListStyle.btnDel} onClick={() => onRemove(note.id)}><img className={ListStyle.trash} src="./images/trash-svgrepo-com 1.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className={ListStyle.divLine}></div>
                </li>
            ))}
        </ul>
    );
};
