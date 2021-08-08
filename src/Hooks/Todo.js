import React,{useState} from 'react'
import Todolist from './Todolist';
function Todo() {
    const [inputList,setinputList] = useState("");
const [Items,setItems]=useState([]);
    const itemEvent=(event)=>{
setinputList(event.target.value)
    }

    const listOfItems=()=>{
setItems((oldItems)=>{
    return[...oldItems,inputList]
});
setinputList('')
    }

    const deleteItems=(id)=>{
        console.log("deleted")
    

    setItems((oldItems)=>{
       return oldItems.filter((arrElem, index)=>{
           return index !== id;
       }) 
    })
}
    return (
        <div>
           <h1>Todo List</h1>
           <input type="text"
               placeholder="name"
               onChange={itemEvent}
           /> 
           <button onClick={listOfItems}>+</button>
           <ol>
              {/* {inputList}  */}
              {Items.map((itemval,index)=>{
                  return <Todolist 
                  key={index}
                  id={index}
                  text={itemval}
                      onSelect={deleteItems}
                  />
              })}
           </ol>
        </div>
    )
}

export default Todo
