
import React,{useState} from "react";


function Counter(){
    const [items, setItems] = useState([])
    const[inputValue, setInputValue] = useState("")

    function addItem(){
        const item = document.querySelector(".input-field").value;
        setItems((prevItems) => [...prevItems, item])

        setInputValue("")
    }

    function deleteItem(index){
        setItems(prevItems => prevItems.filter( (_,i) => i != index ))
    }

    function moveItemDown(index){
        if (index < items.length - 1){
            const newItems = [...items];
            //swap the item at the current index with the next one
            [newItems[index], newItems[index+1]] = [newItems[index+1], newItems[index]]
            setItems(newItems)
        }
    }

    function moveItemUp(index){
        if (index > 0 ){
            const newItems = [...items];
            //swap the item at the current index with the next one
            [newItems[index], newItems[index-1]] = [newItems[index-1], newItems[index]]
            setItems(newItems)
        }
    }
    return(
        <div className="project-container">
            <h2>To-Do-List</h2>
            <div>
                <input className="input-field" type="text" value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}/> 
                <button className="add-button" onClick={addItem} > Add </button>
            </div>

            <div>
                <ol>
                    {items.map((item, index) => (<li key = {index}> 
                        <span className="item-text">{item} &nbsp; </span>
                    <button className="delete-button" onClick={()=>deleteItem(index)}> Delete </button>
                    <button className="up-button" onClick={()=>moveItemUp(index)}> up </button>
                    <button className="down-button" onClick={()=>moveItemDown(index)}> down </button>
                    </li>
                    
                    )
                    ) }
                    
                </ol>
            </div>
        </div>
    );
}

export default Counter;