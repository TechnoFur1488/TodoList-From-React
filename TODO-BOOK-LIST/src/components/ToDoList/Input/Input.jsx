import { useState } from "react";
import { List } from "../List/List";
import { nanoid } from 'nanoid'
import inputStyle from "./Input.module.css"
import { Link } from "react-router-dom";

let arr

if (localStorage.getItem("ToDo")) {
    arr = JSON.parse(localStorage.getItem("ToDo"))
} else {
    arr = []
}


export const Input = () => {
    const [notes, setNotes] = useState(arr)
    const [value, setValue] = useState("")

    // const [check, setChek] = useState(false)

    const handleClickAdd = () => {
        if (value.trim() === "") {

        } else {

            const newNote = {
                id: nanoid(),
                isChecked: false,
                title: value,
                isEdit: false,
            }

            let copy = [...notes, newNote]
            setNotes(copy)
            setValue('')

            localStorage.setItem("ToDo", JSON.stringify(copy))
        }
    }

    const handleClickDel = (id) => {
        let copy = notes.filter(note => note.id !== id)
        setNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickCheck = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isChecked = !el.isChecked
            }

            return el
        })
        setNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleClickEdit = (id) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.isEdit = !el.isEdit
            }
            return el
        })
        setNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }

    const handleEditInputClick = (id, e) => {
        let copy = notes.map(el => {
            if (el.id === id) {
                el.title = e.target.value
            }
            return el
        })
        setNotes(copy)
        localStorage.setItem("ToDo", JSON.stringify(copy))
    }


    return (
        <div className={inputStyle.container}>
            <Link to={"/Notebook"}><button>NOTEBOOK</button></Link>
            <h1>TODO LIST</h1>
            <div className={inputStyle.inputBtn}>
                <div className={inputStyle.inputAndBtn}>
                    <input className={inputStyle.glavInput} placeholder="Создать новую заметку..." value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button className={inputStyle.btn} onClick={() => handleClickAdd()}>CОЗДАТЬ</button>
                </div>
                <div>
                    <List notes={notes} isEditInput={handleEditInputClick} onEdit={handleClickEdit} onCheked={handleClickCheck} onRemove={handleClickDel} />
                </div>
            </div>
        </div>
    )
}
