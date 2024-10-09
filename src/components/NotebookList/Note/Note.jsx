export const Note = ({ note, onDelete, onSelect  }) => {

    const getPreviewText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 3 ? '...' : '');
    };

    return (
        <div onClick={onSelect}>
            <h2>{note.title}</h2>
            <p>{getPreviewText(note.content)}</p>
            <button onClick={() => onDelete(note.id)}>Удалить</button>
        </div>
    );
};
