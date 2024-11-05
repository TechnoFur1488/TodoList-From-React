import { useState } from "react";
import { ListInput } from "../ListInput/ListInput";
import { nanoid } from 'nanoid'
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


    return (
        <div className={inputStyle.container}>
            <Link to={"/Notebook"} className={inputStyle.btnRouter}>NOTEBOOK</Link>
            <h1>TODO LIST</h1>
            <div className={inputStyle.inputBtn}>
                <div className={inputStyle.inputAndBtn}>
                    <input className={inputStyle.glavInput} placeholder="Создать новую заметку..." value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button className={inputStyle.btn} onClick={() => handleClickAdd()}>CОЗДАТЬ</button>
                </div>
                <div>
                    <ListInput isSetNotes={setNotes} notes={notes} />
                </div>
            </div>
        </div>
    )
}
