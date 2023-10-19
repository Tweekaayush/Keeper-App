import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Note.css"

const Note = (props) => {
  const [hover, setHover] = useState(false)
  
  function handleClick(){
    return props.removeNote(props.id)
  }

  return (
    <div className='noteContainer' onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        <div className={hover?`deletePopUp PopIn`:'deletePopUp'}>
          <FontAwesomeIcon icon={faTrash} onClick = {handleClick} className='deleteIcon'/>
        </div>
        <div className='noteContent'>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Note
