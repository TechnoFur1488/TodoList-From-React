import s from "./Note.module.css"

export const Note = ({ note, onDelete, onSelect  }) => {

    const getPreviewText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 3 ? '...' : '');
    };

    return (
        <div className={s.container}>
            <h2 onClick={onSelect}>{note.title}</h2>
            <p>{getPreviewText(note.content)}</p>
            <button className={s.btn} onClick={() => onDelete(note.id)}>Удалить</button>
        </div>
    );
};
