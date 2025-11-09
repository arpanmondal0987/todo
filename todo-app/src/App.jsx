import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const hadleNewItem = (itemName ,itemDueDate)=>{
    // console.log(`new item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems,
      { name:itemName,
    dueDate:itemDueDate}
    ]
    setTodoItems(newTodoItems);
  }
  const handleDeletItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item =>item.name != todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`deleted item is ${todoItemName}`)
  }

  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddToDo onNewItem={hadleNewItem}></AddToDo>
      {todoItems.length ==0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeletItem}></TodoItems>
      
    </center>
  );
}

export default App ;
