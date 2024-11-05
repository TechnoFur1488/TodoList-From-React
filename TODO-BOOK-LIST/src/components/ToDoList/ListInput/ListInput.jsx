import { List } from "../List/List";
import ListStyle from "./ListInput.module.css"

export const ListInput = ({ notes }) => {

    // const handleClickDel = (id) => {
    //     let copy = notes.filter(note => note.id !== id)
    //     setNotes(copy)
    //     // localStorage.setItem("ToDo", JSON.stringify(copy))
    // }

    // const handleClickCheck = (id) => {
    //     let copy = notes.map(el => {
    //         if (el.id === id) {
    //             el.isChecked = !el.isChecked
    //         }

    //         return el
    //     })
    //     setNotes(copy)
    //     // localStorage.setItem("ToDo", JSON.stringify(copy))
    // }

    // const handleClickEdit = (id) => {
    //     let copy = notes.map(el => {
    //         if (el.id === id) {
    //             el.isEdit = !el.isEdit
    //         }
    //         return el
    //     })
    //     setNotes(copy)
    //     // localStorage.setItem("ToDo", JSON.stringify(copy))
    // }

    // const handleEditInputClick = (id, e) => {
    //     let copy = notes.map(el => {
    //         if (el.id === id) {
    //             el.title = e.target.value
    //         }
    //         return el
    //     })
    //     setNotes(copy)
    //     // localStorage.setItem("ToDo", JSON.stringify(copy))
    // }

    return (
        <ul className={ListStyle.container}>
            {notes.map(note => (
                <List isNote={note} />
            ))}
        </ul>
    );
};
