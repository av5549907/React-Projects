import React from 'react'
import { useEffect,useState } from 'react';
import {  useNavigate } from 'react-router-dom';
  const Profile=()=>{

  const [authenticated, setauthenticated] = useState(null);
  const [goToProfile,setGoToProfile] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  
  const handleClick=()=>{
      setGoToProfile(true);
      if(goToProfile){
       // return <Navigate to="/"/>;
       console.log(goToProfile);
        navigate('/')
        console.log('Redirecting to Login Page');
        console.log(authenticated);
      }
    }

  // if (!authenticated) {
  // // Redirect
  //    navigate('/');
  // } 
    // const [goToProfile,setGoToProfile]=React.useState(false);
    // const navigate=useNavigate();
    // const handleClick=()=>{
    //   setGoToProfile(true);
    //   if(goToProfile){
    //    // return <Navigate to="/"/>;
    //    console.log(goToProfile);
    //     navigate('/')
    //     console.log('Redirecting to Login Page');

    //   }
    return (
        <div>
        <h1>This is the Profile Page</h1>
        <p>I am adarsh trying to learn react js concepts</p>
        <button onClick={handleClick}>Go To Login </button>
        </div>
    );
    }

 export default Profile;