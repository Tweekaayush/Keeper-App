import React, { useState } from 'react'
import "./Content.css"
import Note from './Card/Note'
import Input from './Input Box/Input'

const Content = () => {

  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes(prevNotes => [...prevNotes, note])
  }

  function removeNote(id){
    const newNotes = notes.filter((note, i)=>{
      return i !== id;
    })
    setNotes(newNotes)
  }

  return (
    <div className='container'>
        <Input addNote = {addNote}/>
        <div className='notesContainer'>
          {notes.map((note, i) => {
            return <Note key= {i} id={i} title = {note.title} content = {note.content} removeNote = {removeNote}/>
          })}
        </div>
    </div>
  )
}

export default Content
