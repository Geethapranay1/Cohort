import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


//dynamic websites
//when we have to create dynamic websites 
//you have to write lot of js code that does DOM manupulation
  return (
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      // React.createElement("div")
  )
}

export default App
