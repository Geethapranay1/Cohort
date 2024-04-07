import { useEffect, useState } from 'react';
import { CreateTodo } from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"
import axios from 'axios'
import { set } from 'zod';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(res => {
        setTodos(res.data.todos)
      })
  }, [todos])

  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
 