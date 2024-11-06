import { useState } from "react"
import { nanoid } from "nanoid"
import { List } from "../List2/List2"
import inputStyle from "./Input.module.css"
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
    let arr

    if (localStorage.getItem("ToDo")) {
        arr = JSON.parse(localStorage.getItem("ToDo"))
    } else {
        arr = []
    }
    return { arr }
}

export const Input = () => {
    let { arr } = useLoaderData()
    const [notes, setNotes] = useState(arr)
    const [value, setValue] = useState("")

    const handleClickAdd = () => {
        if (value.trim() === "") {
            alert("Введите что то в поле")
        } else {
            const newNote = {
                id: nanoid(),
                isChecked: false,
                title: value,
                isEdit: false,
            }

            let copy = [...notes, newNote]
            setNotes(copy)
            setValue("")

            localStorage.setItem("ToDo", JSON.stringify(copy))
        }
    }

    return (
        <div className={inputStyle.container}>
            <Link to={"/Notebook"}><button className={inputStyle.btnRouter}>NOTEBOOK</button></Link>
            <h1>TODO LIST</h1>
            <div className={inputStyle.inputBtn}>
                <div className={inputStyle.inputAndBtn}>
                    <input  className={inputStyle.glavInput} placeholder="Создать новую заметку..." type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <button className={inputStyle.btn} onClick={() => handleClickAdd()}>добавить</button>
                </div>
                <div>
                    <List notes={notes} isSetNotes={setNotes} />
                </div>
            </div>
        </div>
    )
}