import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
function Incdc() {
    const [num,setNum] = useState(0);

    const numic =()=>{
setNum(num+1)
    }
    const numdc =()=>{
        if (num > 0)
        {
            setNum(num-1)
        }else{
            setNum(0)
        }
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={numic}><AddIcon/></button>
            <button onClick={numdc}><RemoveIcon/></button>
        </div>
    )
}

export default Incdc
