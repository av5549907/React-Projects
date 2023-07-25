import React from "react"
// 
import { useState } from "react";
//import { TaskTable } from "./TaskTable";
import { BrowserRouter as Router,Route,Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import './ButtonDesign.css';
import { TaskTable } from "./TaskTable";



 export const Buttondes=()=>{

  //  const navigate=useNavigate('');
   //const navigate=useNavigate();
  const [goToProfile,setGoToProfile]=useState(false);

  const handleClick=(e)=>{
    e.preventDefault();
    setGoToProfile(true);
    if(goToProfile){
      return <Navigate to="/tasktable"/>;
    }
  }
  
    return (

      <>
        <div className="container">
         {/* <Navigate to="/profile"/>         */}
         <div >
             <div><h1>Welcome back!</h1></div>
           <div>
          <label className="labelcls">Email</label>   
          </div>
          <div >
          <i className="fa fa-envelope" ></i>
          <input type='text' placeholder="User Name" className="finput"/>
          </div>
          <div>
          <label className="labelcls">Password</label> 
          </div>
          <div ><i class="fa fa-lock" ></i>
          <a href="" className="acls" >Forgot password?</a>
          <input type='password' placeholder="Password"className="sinput"/></div>
          
          <div><button className="buttoncls" onClick={handleClick}>
           Log in
          </button><br/></div>
          <div className="dcls"><a href="">or login with SSO</a></div>
        </div>
        </div>
        <div style={{color:'black',marginTop:"30px",fontFamily:'Lucida Sans Lucida Sans Regular Lucida Grande Lucida Sans Unicode'}}>Don't have account? <a href="">Sign up</a></div>
       
      </>

    )
}

