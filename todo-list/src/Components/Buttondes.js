import React from "react";

import { useState } from "react";


import {
  useNavigate,
} from "react-router-dom";
import "./ButtonDesign.css";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock }  from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const Buttondes = () => {
   const navigate=useNavigate();
  //const navigate=useNavigate();
  const [goToProfile, setGoToProfile] = useState(false);
 
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "adarsh", password: "test" }];
  const handleUser=(e)=>{
    setusername(e.target.value);
       console.log(username);
  }
  const handlePass=(e)=>{
    setpassword(e.target.value);
    console.log(password);
}
  const handleClick = (e) => {
     //e.preventDefault();
     console.log(e);
    //  console.log("user : "+username);
    //  console.log("Password : "+password);
     const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
    }

    setGoToProfile(true);

    console.log(goToProfile);
    console.log("authentiacated : "+authenticated);
    let val=goToProfile&&authenticated;
    console.log("result : "+val);
    if (goToProfile&&authenticated) {
      console.log("redirecting....");
         //navigate('/profile');
          navigate('/tasktable');
        console.log("Page redirected To Profile");
    }else{
      //alert("You have entered Wrong Username or Password");
      navigate('/');
      //alert("You have entered Wrong Username or Password");
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
          <FontAwesomeIcon icon={faEnvelope}  className='email'/>
            <input type="text" placeholder="User Name" className="finput" onChange={handleUser} />
          </div>
          <div>
            <label className="labelcls">Password</label>
          </div>
          <div>
          <FontAwesomeIcon icon={faLock} className='pass' />
            <a href="https://www.abc.com" className="acls">
              Forgot password?
            </a>
            <input type="password" placeholder="Password" className="sinput" onChange={handlePass} />
          </div>

          <div>
            <button className="buttoncls" type="submit" onClick={handleClick}>
              Log in
            </button>
            <br />
           
          </div>
          </form>
          <div className="dcls">
            <a href="https://www.abc.com">or login with SSO</a>
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
        Don't have account? <a href="https://www.abc.com">Sign up</a>
      </div>
    </>
  );
};
