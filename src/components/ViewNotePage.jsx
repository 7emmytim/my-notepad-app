import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"

const ViewNotePage = ({ toView }) => {
    const { title, content, category, date } = toView
    return (
        <div id="view-note-page">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-3 m-0">
                <Link to="/" className="home-icon text-muted" style={{ textDecoration: 'none', }}>
                    {/* <i className="fa fa-sm fa-angle-double-left"> </i> */}
                    <IoIosArrowBack className="home-icon p-0 m-0" />
                    <span className="navbar-brand p-0 m-0 ml-2">NOTEBOOK</span>
                </Link>
            </nav>

            {
                content === undefined ? null :
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom py-2 px-3">
                        <Link to="/edit-page" className="ml-auto">
                            {/* <i className="fa fa-edit " ></i> */}
                            <FaRegEdit className="edit-icon" />
                        </Link>
                    </nav>
            }

            <div className="note-list" >
                <dl className="px-2 py-3 m-0">
                    <dd>{category} <small> {date}</small></dd>
                    <dt>{title}</dt>
                    <p className="lead">{content}</p>
                </dl>
            </div>
        </div>
    )
}

export default ViewNotePage
