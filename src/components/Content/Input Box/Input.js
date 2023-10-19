import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Input.css"

const Input = (props) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e){
        const {name, value} = e.target

        setNote((prevNotes) =>{
            return ({
                ...prevNotes,
                [name]: value
            })
        })
    }

    function newNote(e){
        e.preventDefault();
        setNote({
            title:"",
            content:""
        })
        props.addNote(note)
    }

    function handleFocus(){
        setIsExpanded(true)
    }

  return (
    <div className='inputContainer'>
        <form>
            {isExpanded && <input type='text' placeholder='Title' name='title' onChange={handleChange} value={note.title}/>}
            <textarea onFocus={handleFocus} name='content' placeholder='Take a note...' onChange={handleChange} value={note.content} rows={isExpanded?3:1}/>
            {isExpanded && <button onClick={newNote}><FontAwesomeIcon icon={faPlus} /></button>}
        </form>
    </div>
  )
}

export default Input
