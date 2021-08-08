import React from 'react'

function Todolist(props) {
  
        return <>
        <div className="name">
        <i className="far fa-trash-alt" aria-hidden="true" 
        onClick={()=>{ props.onSelect(props.id)}}/>
         <li>{props.text}</li>
        </div>
       </>
  
}

export default Todolist
