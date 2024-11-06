import ListStyle from "./ListItem.module.css"

export const ListItem = ({ isSetNotes, notes, id, title, isChecked, isEdit }) => {

    const handleClickDel = (id) => {
        let copy = notes.filter(el => el.id !== id)
        isSetNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickCheck = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isChecked = !el.isChecked
            }

            return el
        })
        isSetNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickEdit = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isEdit = !el.isEdit
            }
            return el
        })
        isSetNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleEditInputClick = (id, e) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.title = e.target.value
            }
            return el
        })
        isSetNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    return (
        <li className={ListStyle.liContainer}>
            <div className={ListStyle.containerFlex}>
                <div>
                    <label className={ListStyle.customСheckbox}>
                        <input type="checkbox" checked={isChecked} onChange={() => handleClickCheck(id)} />
                        <span className={ListStyle.checkmark}></span>
                    </label>
                    {isEdit ?
                        <input className={isChecked ? ListStyle.spanText : ListStyle.spanTextNone} type="text" value={title} onChange={e => handleEditInputClick(id, e)} />
                        : <span className={isChecked ? ListStyle.spanText : ListStyle.spanTextNone}>{title}</span>}
                </div>
                <div>
                    <button className={ListStyle.btnEdit} onClick={() => handleClickEdit(id)}></button>
                    <button className={ListStyle.btnDel} onClick={() => handleClickDel(id)}></button>
                </div>
            </div>
        </li>
    )
} 