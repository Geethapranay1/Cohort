import { useState } from 'react';
//todo-application
//todo
// {
//   todos: [
//     {
//       title: "dsfojsdpof",
//       description : "dsfd",
      
//     }
//   ]
// }


function App() {
  console.log("app called")
  const [todos, setTodos] = useState([]);
  function addTodo() {
    console.log("Add todo called")
    // setTodos([...todos, {
    //   title: "new Todo",
    //   description : "desc of new todo",

    // }])
    let newTodo = [];
    for (let i = 0; i < todos.length; i++) {
      newTodo.push(todos[i]);
    }
    newTodo.push({
      title: "new Todo",
      description : "desc of new todo",
    })
    setTodos(newTodo);
  }
  

  return (
    <div>
      {/* {console.log("return called")} */}
      <button onClick={addTodo}>Add a random Todo</button>
      {/* <Todos title={todos[0].title} description={todos[0].description}></Todos>
      <Todos title={todos[1].title} description={todos[1].description}></Todos> */}
      {todos.map((todo) => {
        return (
          <Todos title={todo.title} description={todo.description}></Todos>
        )
      })}
    </div>
  )
}


function Todos(props) {
  console.log("todos componed called")
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}
export default App
