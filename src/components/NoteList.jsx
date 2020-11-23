import React from 'react'
import Note from "./Note"

const NoteList = ({ notes, deleteNote, viewNote }) => {

    return (
        <div className="container-fluid mt-2 mb-5 p-0 pb-3 note-body">
            {notes.sort((a, b) => b.id - a.id).map((a, i) => {
                return (
                    <Note
                        a={a}
                        key={i}
                        deleteNote={deleteNote}
                        viewNote={viewNote}
                    />)
            })}
        </div>

    )
}

export default NoteList
