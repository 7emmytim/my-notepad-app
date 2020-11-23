import React from 'react'
import { Link } from 'react-router-dom'

const EditPageNav = ({ toView, submitNote, handleChange, deleteNote }) => {

    const deleteToSave = () => {
        deleteNote(toView.id)
        submitNote()
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-3 m-0" id="edit-page">
                <Link to="/">
                    <button className="cancel-btn">CANCEL</button>
                </Link>
                {
                    toView.content === undefined ? null :
                        <Link to="/" className="ml-auto">
                            <button onClick={deleteToSave} className="save-btn">SAVE</button>
                        </Link>
                }
            </nav>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom py-2 px-3 m-0">
                <label className="mx-auto m-0">
                    <input
                        type="text"
                        name="category"
                        className="form-control category-nav mx-auto"
                        onChange={handleChange}
                        defaultValue={toView.category}
                        placeholder="Input Category Here"
                    />
                </label>
            </nav>
        </>
    )
}

export default EditPageNav
