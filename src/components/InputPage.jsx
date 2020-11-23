import React, { useState } from 'react'
import InputPageNav from "./InputPageNav"
import InputFormArea from "./InputFormArea"
import moment from "moment"

const InputPage = ({ onAdd }) => {

    const [note, setNote] = useState({ title: "", content: "", category: "", date: "", id: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setNote(prevNote => {
            return {
                ...prevNote, [name]: value
            }
        })
    }

    const submitNote = () => {
        if (note.content !== "") {
            note.date = moment().format("LT LL")
            note.id = new Date().valueOf() + ""
            if (note.category === "") note.category = "Uncategorized"
            if (note.title === "") note.title = "Untitled Note"
            onAdd(note)
        }
    }

    return (
        <div>
            <section className="container-fluid p-0 pb-3" id="add-note-page">
                <InputPageNav
                    note={note}
                    submitNote={submitNote}
                    handleChange={handleChange}
                />
                <InputFormArea
                    note={note}
                    handleChange={handleChange}
                />
            </section>
        </div>
    )
}

export default InputPage


