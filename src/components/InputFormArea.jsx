import React from 'react'

const InputFormArea = ({ note, handleChange }) => {
    
    return (
        <form>
            <input
                type="text"
                name="title"
                className="title p-2"
                value={note.title}
                onChange={handleChange}
                placeholder="Note Title" />
            <textarea
                name="content"
                className="note-input px-4 py-3"
                value={note.content}
                onChange={handleChange}
                autoFocus>
            </textarea>
        </form>
    )
}

export default InputFormArea
