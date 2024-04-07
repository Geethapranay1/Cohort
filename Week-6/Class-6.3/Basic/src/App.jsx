import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  console.log("hi there from inside app")
  return (
    <div>
      <button onClick={() => {
        setCount(count+1);
      }}>count {count}</button>
    </div>
  )
}

export default App
