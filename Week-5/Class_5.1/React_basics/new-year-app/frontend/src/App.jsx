import { useState } from 'react';
import { CreateTodo } from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"

function App() {
  const [todos, setTodos] = useState([]);
  
  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const ans = await res.json();
      setTodos(ans.todos);
    })

  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
 