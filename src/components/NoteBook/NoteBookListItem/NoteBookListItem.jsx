import s from "./NoteBookListItem.module.css"

export const NoteBookListItem = ({ isSetNotes, isSetValueInput, isSetValueText, notes, id, topTitle, botTitle, isEditTop, isEditBot }) => {
    const onSelect = (id) => {
        const selectedNote = notes.find(el => el.id === id);

        if (selectedNote) {
            isSetValueInput(selectedNote.topTitle);
            isSetValueText(selectedNote.botTitle);
        }

        isSetNotes(notes)
    }

    const handleClickDel = (id) => {
        let copy = notes.filter(el => el.id !== id)

        isSetNotes(copy)
        localStorage.setItem("Note", JSON.stringify(copy))
    }

    const handleClickEdit = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isEditTop = !el.isEditTop
                el.isEditBot = !el.isEditBot
            }

            return el
        })

        isSetNotes(copy)
        localStorage.setItem("Note", JSON.stringify(copy))
    }

    const handleEditInputClick = (id, e, field) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                if (field === "topTitle") {
                    el.topTitle = e.target.value
                } else if (field === "botTitle") {
                    el.botTitle = e.target.value
                }
            }

            return el
        })

        isSetNotes(copy)
        localStorage.setItem("Note", JSON.stringify(copy))
    }

        const getPreviewText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 3 ? '...' : '');
    };

    return (
        <li className={s.container}>
            <div className={s.text}>
                {isEditTop ?
                    <input maxLength={20} className={s.input} type="text" value={topTitle} onChange={e => handleEditInputClick(id, e, "topTitle")} />
                    : <h1 onClick={() => onSelect(id)}>{topTitle}</h1>}
                {isEditBot ?
                    <textarea className={s.textArea} name="" id="" value={botTitle} onChange={e => handleEditInputClick(id, e, "botTitle")} />
                    : <p className={s.pText}>{getPreviewText(botTitle)}</p>}
            </div>
            <div className={s.divBtn}>
                <button className={s.btnEdit} onClick={() => handleClickEdit(id)}></button>
                <button className={s.btnDel} onClick={() => handleClickDel(id)}></button>
            </div>
        </li>
    )
}