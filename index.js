import React from "react";
import ReactDOM from "react-dom/client";
import Paragraph from "./paragraph";
import Details from "./details";
import pic from './sun.jpg';
import { useState } from "react";
import "./button.css"
const Greeting = () => {
    const[count,setCount]=useState(0);
    const handleClick =()=>{
        console.log("clicked....");
        setCount(count+1);
   };
   return(
    <div>
    <h1>Counters that update together</h1>
    <div className="first"><button onClick={handleClick}>clicked{count}times</button></div>
    <div className="first"><button onClick={handleClick}>clicked{count}times</button></div>
    </div>
   )
};
const root=ReactDOM.createRoot(document.getElementById("root"));

const Flower = () =>{
    return (
      <div>
        <Paragraph />
        <img src={pic} alt="sun flower" height={200} width={200} />
        <Details />
        <Greeting />
      </div>
    );
}

root.render(<Flower />);
export default Flower;

