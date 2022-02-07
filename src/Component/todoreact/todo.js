import React, {useState,useEffect} from 'react'
import "./style.css"

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    const addItems = () => {
        if (!inputData)
            alert('Please enter some valid data');
        else if (inputData && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputData };
                    }
                    return curElem;
                })
            );
            setInputData([]);
            setIsEditItem();
            setToggleButton(false);
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, newInputData]);
            setInputData("");
        }
    }
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };
    const removeAll = () => {
        setItems([]);
    }
    //Adding local storage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>
                            Add Your List here✌️
                        </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Item" className="form-control" value={inputData}
                        onChange={(event) => setInputData(event.target.value)}>
                        </input>
                        <i className="fa fa-plus add-btn" onClick={addItems}></i>
                    </div>
                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                            
                                    <div className="todo-btn">
                                        <i class="fa fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                                        <i class="fa fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                                
                            );
                        } )}
                        <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                            </button>
                            </div>
                    </div>
                </div>
          </div>
        </>
    )
}
export default Todo;
