import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import React from 'react'
import axios from 'axios'

var a = 1;

function App() {
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   axios("https://sum-server.100xdevs.com/todos")
  //     .then(res => {
  //       setTodos(res.data.todos);
  //     })
  // }, [])
  // const [selectedId, setSelectedId] = useState(1);
  // const [count, setCount] = useState(0);
  // const [inputValue, setValue] = useState(1);
  // const [counter, setCounter] = useState(0)

  // let counter = useMemo(() => {
  //   console.log("memo got calleds")
  //   let counter = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     counter += i
  //   }
  //   return counter
  // }, [inputValue])

  // useEffect(() => {
  //   console.log("use effect got called")
  //   let count1 = 0
  //   for (let i = 1; i <= inputValue; i++) {
  //     count1 += i
  //   }
  //   setCounter(count1)
  // }, [inputValue])

  // var a = 1;
  //functions are not equal with previous functions so that they will rerender even if function is constant so we use
  //useCallback to over come this problem mainly in using React.memo it means it will only rerender when there is a change in props
  //or else it will not rerender

  // var a = 1;
  const a = useMemo(function() {
    console.log("hi there")
  }, [])
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>count ({count})</button>

      <Demo a = {a} />
    </div>
  )
}

const Demo = React.memo(function({a}) {
  console.log("rerender")
  return <div>
    hi there
  </div>
})

// function Todo({id}) {
//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     setInterval(() =>{
//       axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(res => {
//         setTodos(res.data.todo)
//       })
//     }, 1000)
    
//   }, [id])
//   return <div>
//   <h1>{todos.title}</h1>
//   <h2>{todos.description}</h2>
//   </div>
// }

/* <button onClick={() => {
        setSelectedId(1)
      }}>1</button>
      <button onClick={() => {
        setSelectedId(2)
      }}>2</button>
      <button onClick={() => {
        setSelectedId(3)
      }}>3</button>
      <button onClick={() => {
        setSelectedId(4)
      }}>4</button>
      <Todo id = {selectedId}/> */
export default App
