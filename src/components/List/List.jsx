export const List = ({ notes, onRemove }) => {


    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <input type="checkbox" checked={notes.isChecked}/>
                    {note.title}
                    <button onClick={() => onRemove(i.id)}>удалить</button>
                </li>
            ))}
        </ul>
    );
};
