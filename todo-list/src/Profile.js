import React from 'react'
import { Navigate,Link } from 'react-router-dom';
const Profile=()=>{

    const [goToProfile,setGoToProfile]=React.useState(false);
    
    const handleClick=()=>{
      setGoToProfile(true);
      if(goToProfile){
        return <Navigate to="/"/>;
      }
    }

    return (
        <div>
        <p>I am adarsh</p>
        <button onClick={handleClick}>Go To Login </button>
        </div>
    );

}

export default Profile;