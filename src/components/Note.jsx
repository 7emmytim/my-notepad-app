import React from "react"
import { Link } from 'react-router-dom'
import { FaRegTrashAlt } from "react-icons/fa"

const Note = ({ a, deleteNote, viewNote }) => {

    const allowDelete = () => {
        deleteNote(a.id)
    }

    const allowView = () => {
        viewNote(a.id)
    }

    return (

        <div className="note-list" id={a.id} onClick={allowView} >
            <Link to="/view-note-page" style={{ textDecoration: 'none', }} >
                <dl className="px-2 py-3 m-0">
                    <dt>{a.title}</dt>
                    <dd> {a.category} <small>{a.date}</small></dd>
                </dl>
            </Link>
            <span className="right-fa">
                {/* <Link to="/view-note-page">
                            <i className="fa fa-edit fa-1x"></i>
                        </Link> */}
                <FaRegTrashAlt className="fa" onClick={allowDelete} />
            </span>
            <hr className="m-0" />
        </div>

    )
}

export default Note