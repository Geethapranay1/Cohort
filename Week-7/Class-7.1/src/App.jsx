
// import './App.css'
// import React, { Suspense, lazy }  from 'react'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// const Dashboard = React.lazy(() => import("./components/Dashboard"))
// const Landing = React.lazy(() => import("./components/Landing"))

import { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {

  const [count, setCount] = useState(0);

  
  // const router = [{
  //   route:"/",
  //   component: Dashboard

  // }]

  // return (
  //   <div>
  //     {/* <button onClick={() => {
  //       window.location.href = "/"
  //     }}>Landing</button>
  //     <button onClick={() => {
  //       window.location.href = "/dashboard"
  //     }}>Dashboard</button>       */}
  //     <BrowserRouter>
  //       <Appbar />
  //       <Routes>
  //         <Route path="/" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}></Route>
  //         <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}></Route>
  //       </Routes>  
  //     </BrowserRouter>
  //   </div>
  // )
  //wrap anyone that wants to use the teleporter in the context provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )

}

// function Appbar() {
//   // const navigate = useNavigate();

//   // return <div>
//   //     <div >
//   //       <button onClick={() => {
//   //         navigate("/")
//   //       }}>Landing</button>
//   //       <button onClick={() => {
//   //         navigate("/dashboard")
//   //       }}>Dashboard</button>
//   //     </div>
//   // </div>
// }


function Count({setCount}) {
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount}/>
    </div>
  )
}

function CountRender() { 
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )

}

function Buttons({setCount}) {
  const count = useContext(CountContext);
    return(
      <div>
        <button onClick={() => {
          setCount((prevCount) => prevCount + 1)
        }}>Increment</button>
        <button onClick={() => {
          setCount((prevCount) => prevCount - 1)
        }}>Decrement</button>
      </div>
    )
}
export default App


//window.location.href 


// window.location.href = "/dashboard" // this will reload the page and go to the dashboard page
// window.location.href = "/" // this will reload the page and go to the landing page

// useNavigate() // this will not reload the page and go to the landing page
// useNavigate("/dashboard") // this will not reload the page and go to the dashboard page
// https://education.github.com/pack/offers 
