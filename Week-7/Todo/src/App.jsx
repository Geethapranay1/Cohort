import { useState } from 'react'
import { Todos } from './state/values'
import { useRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { filterTodo, filteredTodos } from './state/values'

function App() {
  

  return (
    <RecoilRoot>
      <AddTodo />
      <RenderTodo />  
    </RecoilRoot>
    
  )
}

function AddTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState("")
  const [todos, setTodos] = useRecoilState(Todos)
  const [filter, setFilter] = useRecoilState(filterTodo)
  
  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/><br />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'/><br />
      <button onClick={() => {
        setTodos([...todos, {title:title, description:description}])
      }}>Add</button><br />
      <h1>Search todos here</h1>
      <input type="text" placeholder="search" onChange={(e) => {
        const value = e.target.value; 
        setFilter(value)
        }
      }/>


        {/* //write with selector
        // const value = useRecoilValue(filterTodo)
      //   if (value) {
      //     setTodos(todos.filter(todo => todo.title.includes(value)))
      //   } else {      
      //     setTodos([...todos])  
      // } */}
      
    </div>
  )
}

function RenderTodo() {
    const todos = useRecoilValue(filteredTodos)
    return (
      <div>
        {todos.map((todo, index) => {
          return (
              <div key={index}>
                <h1>{todo.title}</h1>
                <br />
                <h3>{todo.description}</h3>
              </div>
            );
        })}
        
      </div>

    )
}

export default App
