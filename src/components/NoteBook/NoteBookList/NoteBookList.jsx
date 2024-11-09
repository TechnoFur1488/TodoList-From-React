import { NoteBookListItem } from "../NoteBookListItem/NoteBookListItem"
import s from "./NotebookList.module.css"

export const NotebookList = ({ notes, isSetNotes, isSetValueInput, isSetValueText, }) => {
    return (
        <ul className={s.container}>
            {notes.map(el => (
                <NoteBookListItem isSetNotes={isSetNotes} isSetValueInput={isSetValueInput} isSetValueText={isSetValueText}
                    notes={notes} key={el.id}
                    id={el.id} topTitle={el.topTitle} botTitle={el.botTitle} isEditTop={el.isEditTop} isEditBot={el.isEditBot}
                />
            ))}
        </ul>
    )
}