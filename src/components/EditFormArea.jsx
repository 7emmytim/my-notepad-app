import React from 'react'

function EditFormArea({ toView, handleChange }) {
    return (
        <form>
            <input
                type="text"
                name="title"
                className="title p-2"
                onChange={handleChange}
                defaultValue={toView.title}
            />
            <textarea
                name="content"
                className="note-input px-4 py-3"
                autoFocus
                onChange={handleChange}
                defaultValue={toView.content}>
            </textarea>
        </form >
    )
}

export default EditFormArea
