import React from 'react'
import { Link } from "react-router-dom"
import { FaPlusCircle } from "react-icons/fa"

const HomePageNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-3 m-0">
                <span className="navbar-brand p-0 m-0">NOTEBOOK</span>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom py-2 px-3 m-0">
                <Link
                    to="/input-page"
                    className="ml-auto">
                    {/* <i className="fa fa-plus-circle add-note-icon"></i> */}
                    <FaPlusCircle className="add-note-icon" />
                </Link>
            </nav>
        </>
    )
}

export default HomePageNav
