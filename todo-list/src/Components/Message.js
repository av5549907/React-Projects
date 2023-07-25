import React,{useState} from "react"
export const Message=()=>{

    const[message,setMassage]=useState("Welcome Visitor")

    return (
       <div>
        <h1>{message}</h1>
        <button onClick={()=>setMassage("Thank for Subscribe")}>Subscribe</button>
       </div>

    )
}