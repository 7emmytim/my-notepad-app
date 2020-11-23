import React from 'react'
import { Link } from 'react-router-dom'

const InputPageNav = ({ note, submitNote, handleChange }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-3 m-0">
                <Link to="/" className="mr-auto">
                    <button className="cancel-btn">CANCEL</button>
                </Link>
                <Link to={note.content !== "" ? "/" : "/input-page"} className="ml-auto" >
                    <button onClick={submitNote} className="save-btn" data-toggle="modal" data-target="#exampleModalLong">SAVE</button>
                </Link>
            </nav>


            {
                note.content !== "" ? null :
                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <small className="lead text-danger mx-auto" style={{ fontSize: "0.9rem" }} id="exampleModalLongTitle">
                                        Notepad can't save an empty content field
                                    </small>
                                    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" className="text-danger">&times;</span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <nav
                className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom py-2 px-3 m-0">
                <label className="mx-auto m-0">
                    <input
                        type="text"
                        name="category"
                        className="form-control category-nav"
                        value={note.category}
                        onChange={handleChange}
                        placeholder="Input Category Here"
                    />
                </label>
            </nav>
        </>
    )
}

export default InputPageNav
