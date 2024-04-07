import { useState } from 'react'
import React from 'react'
// import { Tag  } from './Components/header';

function App() {
  const [title, setTitle] = useState("harkirat");

  

  // return (
  //   <div>
  //     <button onClick={() => {
  //       setTitle(Math.random())
  //     }}>Click me to change the title</button>
  //     <Tag title = {title}></Tag>
  //     <Tag title = "pranay"></Tag>
  //   </div>
  // )

  return (
    <div>
        <button onClick={() => {
        setTitle(Math.random())
      }}>Click me to change the title</button>
        <Header title={title}></Header>
        <Header title="pranay"></Header>
        <Header title="pranay"></Header>
    </div>
  )
}

  // function HeaderWithButton() {
  //   const [title, setTitle] = useState("My name is harkirat");
  //   function changeTitle() {
  //     setTitle("My name is " + Math.random());
  //   }
  

  //   return(
  //     <div>
  //       <button onClick={changeTitle}>update the title</button>
  //       <Header title={title}></Header>
  //     </div>
  //   )
      

const Header = React.memo(function Header({title}) {
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
})


export default App
