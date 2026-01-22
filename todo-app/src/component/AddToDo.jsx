import { useState } from "react";

function AddToDo({onNewItem}) {
    const [todoName,setTodoName] = useState('');
    const [dueDate,setDueDate] = useState('');

    const handleNameChange =(event) =>{
        setTodoName(event.target.value)
    };
    const handleDateChange =(event) =>{
        setDueDate(event.target.value)
    };
    const handelAddButton = (event)=>{
         onNewItem(todoName,dueDate);
         event.preventDefault();
         setTodoName(""); 
         setDueDate("");
    }


    return (<div className="container text-center">
        <form className="row am-row"
            onSubmit={handelAddButton}>
            <div className="col-sm-6">
                <input type="text" placeholder="enter todo here"value={todoName} 
                onChange ={handleNameChange}
                />
            </div>
            <div className="col-sm-4">
                <input type="date" value={dueDate}
                onChange ={handleDateChange}/>
            </div>
            <div className="col-sm-2">
                <button 
                
                className="btn btn-success am-button"
                >
                    Add
                </button>
            </div>
        </form>
    </div>
    );
}
 export default AddToDo