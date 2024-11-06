import { ListItem } from "../ListItem/ListItem"

export const List = ({ notes, isSetNotes }) => {
    return (
        <ul>
            {notes.map(el => (
                <ListItem isSetNotes={isSetNotes} notes={notes} key={el.id}
                id={el.id} title={el.title} isChecked={el.isChecked} isEdit={el.isEdit}
                />
            ))}
        </ul>
    )
}