
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
      <CountContext.Provider value={{count, setCount}}>
        <Count />
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


function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  )
}

function CountRender() { 
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )

}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
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

//useNavigate() hook is used to navigate to the different routes in the react application


//the syntax of useContext is useContext(context) where context is the context object that is created using createContext() method
//the useContext hook is used to consume the context object that is created using createContext() method
//example of useContext hook is given below
// const count = useContext(CountContext);
//the above code will consume the count value from the context object CountContext
//the useContext hook is used to consume the context object value in the functional component
//export the context object using createContext() method
//create a context object using createContext() method
//create a provider component using the context object
//consume the context object value using useContext hook in the functional component
//the useContext hook is used to consume the context object value in the functional component
//the syntax of <CountContext.Provider> is <CountContext.Provider value={count}>
//the value attribute of the <CountContext.Provider> component is used to pass the value to the context object
//wrap the component that wants to use the context object in the provider component