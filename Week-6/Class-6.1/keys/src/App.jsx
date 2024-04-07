
import { useState } from 'react'
// let counter = 4;
// function App() {
//   const [todos, setTodos] = useState([{
//     id:1,
//     title: "go to gym",
//     description: "dsfad"
//   },{
//     id:2,
//     title: "go to sdf",
//     description: "sdf"
//   },{
//     id:3,
//     title: "go to as",
//     description: "as"
//   }])
//   function addTodo() {
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return (
//     <div>

//       <button onClick={addTodo}>Add todo</button>
//         {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }


function App() {
  return (
    <div>
    <CardWrapper innerComponent = {<TextComponent/>} />
    </div>
  )
}


function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardWrapper(props) {
      return <div style={{margin:"0", padding:"0", border:"2px solid black"}}>
        {props.innerComponent}
      </div>
} 
export default App

//todos.map(todo => <Todo title = {title} description = {description}/>)
