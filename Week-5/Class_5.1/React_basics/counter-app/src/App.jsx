    //  {/* <button onClick={onClickHandler}>Counter {count}</button> */}
// import './App.css'
import React from "react";
import { useState } from "react";
//state, components
//this one will not watch react so it is not increasing
// let state = {
//   count : 0,
// }
function App() {
  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);
  
  // function onClickHandler() {
  //   // count++; //This is not right way to set the count variable 
  //   setCount(count+1);
  
  return (
    <div>
      <customButton count = {count} setCount = {setCount}></customButton>
    </div>
  )
}

function customButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>Counter {props.count}</button>
  );
}




export default App
