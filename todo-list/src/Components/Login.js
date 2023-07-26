import React from 'react'; 
import './Login.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock }  from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import 'font-awesome/css/font-awesome.min.css';
//import { Navigate } from 'react-router-dom';

const Login = () => {
    return (
        
        <div className='main'>
        <header></header> 
        <div className='sub-main'>
           
        <div>
            <div><h3>Welcome back!</h3></div>
            <div>
            <form>
                <div style={{textAlign:"left"}}>
                <label >Email</label>
                <div>
                <FontAwesomeIcon icon={faEnvelope}  className='email'/>
                <input type="text" placeholder='Enter Your Email' ></input>
                </div>
                <div style={{textAlign:"left"}}>
                <label>Password</label>
                </div>
                <div>
                <FontAwesomeIcon icon={faLock} className='pass' />
                <input type="password" placeholder='Enter Your Password' />
                <p>Forgot Password?</p>
                </div>
                </div>
             
            </form>
            <div><button className='buttoncls'>Log In</button></div>
            </div>
        </div>
        </div>
            <div>Don't have account? <a href="https://www.abc.com">Sign up</a></div>
        </div>
    );
}

export default Login;
