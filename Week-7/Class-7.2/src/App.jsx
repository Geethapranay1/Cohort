
import { useState } from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue, useRecoilState, useSetRecoilState, RecoilRoot } from 'recoil'//importing Recoil hooks

//37:00
function App() {
  console.log("App Rendered")
  return (
    <div>
      <RecoilRoot> 
        <Count />
      </RecoilRoot>
      
    </div>
  )
  //RecoilRoot is a component that provides the Recoil state to the components
}

// function Input() {
//   const [input, setInput] = useState("")
//   return <div>
//     <input value={input} onChange={(e) => setInput(e.target.value)} />
//     <button onClick={() => setInput("")}>Clear</button>
//   </div>
// }

function Count() {
  console.log("Count Rendered")
  return <div>
    <CountRender />
    <Buttons />
    <Check />
  </div>
}

function CountRender() {
  const count = useRecoilValue(countAtom)
  console.log("CountRender Rendered")
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Check() {
  const isEven = useRecoilValue(evenSelector)
  console.log("Check Rendered")
  return <div> {(isEven) ? "It is Even" : null} </div>

  //better
  //return <div> {(count % 2 === 0) ? "It is Even" : null} </div>
}

function Buttons() {
  //setCount is a function that is used to update the value of the countAtom
  //setCount(count + 1) //this will update the value of the countAtom
  //setCount(count => count + 1) //this will update the value of the countAtom
  //setcount(function(prevCount) { return prevCount + 1 }) //this will update the value of the countAtom
  console.log("Buttons Rendered")
  //if we use const [count, setCount] = useRecoilState(countAtom) then this will rerender the component whenever the value of the countAtom is updated we don't want that so we use useSetRecoilState
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
  </div>
}
export default App
//51:00 
//1:38:00




//lets say i ask you to render it is even if the current count is even