import React, { useState,useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
function UseE() {
    const [state, setState] = useState(0);
    const [states, setStates] = useState(0);
    useEffect(() => {
        // alert("my");
        document.title = `You Cliked Me ${state} Time`
    },[state])
    return (
        <>
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{
                setState(state+1)
            }}><AddIcon/></button>
        </div>

        <div>
            <h1>{states}</h1>
            <button onClick={()=>{
                setStates(states+1)
            }}><AddIcon/></button>
        </div>
        </>
    )
}

export default UseE
