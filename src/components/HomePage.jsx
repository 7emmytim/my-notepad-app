import React from "react"
import NoteList from "./NoteList"
import HomePageNav from "./HomePageNav"

const HomePage = ({ notes, deleteNote, viewNote }) => {

    return (
        <section className="container-fluid p-0 m-0" id="note-homepage">
            <HomePageNav />
            <NoteList notes={notes} deleteNote={deleteNote} viewNote={viewNote} />
        </section>
    )
}

export default HomePage





