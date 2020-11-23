import React, { useState } from "react"
import EditPageNav from "./EditPageNav"
import EditFormArea from "./EditFormArea"
import moment from "moment"

const EditPage = ({ toView, onAdd, deleteNote }) => {

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
        if (note.title === "") note.title = toView.title
        if (note.content === "") note.content = toView.content
        if (note.category === "") note.category = toView.category
        note.date =  moment().format("LT LL")
        note.id = new Date().valueOf() + ""
        onAdd(note)
    }

    return (
        <>
            <EditPageNav toView={toView} handleChange={handleChange} submitNote={submitNote} note={note} deleteNote={deleteNote} />
            <EditFormArea toView={toView} handleChange={handleChange} note={note} />
        </>
    )
}

export default EditPage

