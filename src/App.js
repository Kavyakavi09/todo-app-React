import { useState } from 'react';
import './App.css';

let globalID=0;
function App() {
    //  const myTodos = ["wake up early","morning walking","morning study","practice","breakfast"]
  const [todos, setTodos]= useState([])
       
    const [task,setTask]=useState("")

function creatTodo(e){
  e.preventDefault()
 setTodos(oldTodos=>{
   setTask('')
   return [...oldTodos, {todo:task, id: globalID++ }]
 })
}

function typeTodo(event){
setTask(event.target.value)
}

function deleteItem(itemId){
setTodos(oldTodos=>oldTodos.filter(item=>item.id!== itemId))
}

  return (
    <div className="App">
      <header className="App-header">
       <h1>Best To Do App Ever</h1>
       </header>

       <main>
         <form onSubmit={creatTodo}>
         <input type="text" value={task} onChange={typeTodo}/>
         <button>Create Todo</button>
         </form>
         <ul>
          {todos.map((item,index)=>{
           return(
           <div key={index}>
              <li>{item.todo}</li>
            <button onClick={()=>deleteItem(item.id)}>Delete</button>
           </div>
           )
          })}
         </ul>
       </main>
    </div>
  );
}

export default App;
