import React, { useState, useEffect } from "react"
import HomePage from "./components/HomePage"
import InputPage from "./components/InputPage"
import EditPage from "./components/EditPage"
import ViewNotePage from "./components/ViewNotePage"
import moment from "moment"
import "./components/App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

const LOCAL_STORAGE_KEY = "notes"

const App = () => {

    const [notes, setNotes] = useState(
        [
            {
                title: "Default",
                content: "Hello World",
                category: "Uncategorized",
                id: new Date().valueOf() + "",
                date: moment().format("LT LL")
            }
        ])
    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    const deleteNote = (index) => {
        setNotes([...notes].filter(a => a.id !== index))
    }

    const [toView, setToView] = useState({})

    const viewNote = (index) => {
        setToView(([...notes].filter(a => a.id === index))[0])
    }

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedNotes) setNotes(storedNotes)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    }, [notes])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage notes={notes} deleteNote={deleteNote} viewNote={viewNote} />
                </Route>
                <Route path="/input-page">
                    <InputPage onAdd={addNote} />
                </Route>
                <Route path="/edit-page">
                    <EditPage toView={toView} onAdd={addNote} deleteNote={deleteNote} />
                </Route>
                <Route path="/view-note-page">
                    <ViewNotePage toView={toView} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App