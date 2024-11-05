import ListStyle from './List.module.css'
export const List = ( isNote, isSetNotes ) => {

    const handleClickDel = (id) => {
        let copy = notes.filter(note => note.id !== id)
        isSetNotes(copy)
        // localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickCheck = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isChecked = !el.isChecked
            }

            return el
        })
        isSetNotes(copy)
        // localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickEdit = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isEdit = !el.isEdit
            }
            return el
        })
        isSetNotes(copy)
        // localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleEditInputClick = (id, e) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.title = e.target.value
            }
            return el
        })
        isSetNotes(copy)
        // localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    return (
        <li className={ListStyle.liContainer} key={isNote.id}>
            <div className={ListStyle.containerFlex}>
                <div>
                    <label className={ListStyle.customСheckbox}>
                        <input type="checkbox" checked={isNote.isChecked} onChange={() => handleClickCheck(isNote.id)} />
                        <span className={ListStyle.checkmark}></span>
                    </label>
                    {isNote.isEdit ?
                        <input className={isNote.isChecked ? ListStyle.spanText : ListStyle.spanTextNone} onChange={e => handleEditInputClick(isNote.id, e)} value={isNote.title} />
                        : <span className={isNote.isChecked ? ListStyle.spanText : ListStyle.spanTextNone}>{isNote.title}</span>}
                </div>
                <div className="">
                    <button className={ListStyle.btnEdit} onClick={() => handleClickEdit(isNote.id)}></button>
                    <button className={ListStyle.btnDel} onClick={() => handleClickDel(isNote.id)}></button>
                </div>
            </div>
            <div className={ListStyle.divLine}></div>
        </li>
    )
}

{/* <List isNote={note} */}