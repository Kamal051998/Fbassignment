// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'

function App() {
 const [isChecked,setIsChecked]=useState()

 const checkChange=(e)=>{
 setIsChecked(e.target.checked)

 }
 console.log(isChecked&&isChecked)

  return (
    <div className="">
    <input onChange={checkChange} type='checkbox'  />
    </div>
  );
}

export default App;
