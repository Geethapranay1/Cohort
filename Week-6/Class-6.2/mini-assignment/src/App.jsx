import { memo, useState, useCallback } from 'react'



function App() {

  //useEffect, useMemo, useCallback
  const [count, setCount] = useState(0);

  const p = useCallback(function p() {
    console.log("child called")
  },[])

  return (

    <div>
      <Child a={p}/>
      <br />
      <button onClick={() => {
        setCount(count+1)
      }}>counter ({count})</button>
    </div>
  )
}

const Child = memo(function({a}) {
  console.log("chile render")
  return(
    <button onClick={a}>click me</button>
  )
})

export default App
