import React from "react";
//
import { useState } from "react";
//import { TaskTable } from "./TaskTable";
import { redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./ButtonDesign.css";
// import { TaskTable } from "./TaskTable";

export const Buttondes = () => {
   const navigate=useNavigate();
  //const navigate=useNavigate();
  const [goToProfile, setGoToProfile] = useState(false);

  const handleClick = (e) => {
     e.preventDefault();
     console.log(e);
    setGoToProfile(true);
    console.log(goToProfile);
    if (goToProfile) {
      console.log("redirecting....");
         navigate('/profile');
         //navigate('/tasktable');
        console.log("Page redirected To Profile");
    }
  };

  return (
    <>
      <div className="container">
    
        <div>
          <div>
            <h1>Welcome back!</h1>
          </div>
          <form onSubmit={handleClick}>
          <div>
            <label className="labelcls">Email</label>
          </div>
          <div>
            <i className="fa fa-envelope email" />
            <input type="text" placeholder="User Name" className="finput" />
          </div>
          <div>
            <label className="labelcls">Password</label>
          </div>
          <div>
            <i className="fa fa-lock pass"/>
            <a href="" className="acls">
              Forgot password?
            </a>
            <input type="password" placeholder="Password" className="sinput" />
          </div>

          <div>
            <button className="buttoncls" type="submit" onClick={handleClick}>
              Log in
            </button>
            <br />
           
          </div>
          </form>
          <div className="dcls">
            <a href="">or login with SSO</a>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "black",
          marginTop: "30px",
          fontFamily:
            "Lucida Sans Lucida Sans Regular Lucida Grande Lucida Sans Unicode",
        }}
      >
        Don't have account? <a href="">Sign up</a>
      </div>
    </>
  );
};
