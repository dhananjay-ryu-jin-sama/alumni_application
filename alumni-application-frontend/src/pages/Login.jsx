import googleicon from './Group.png';
import eyeicon from './eye.png';
import check from './Checkmark.png';
import React from "react";
import './Login.css';
export const Login = () => {
    return (
        <>
        <div className="logincontainer">
            <h1 className='psg'>
            <span className='psg'>PSG</span>
            <span className='itech'>ITECH</span>
            </h1>
        <form className="loginform" >
            <label className="elabel">Email Address</label>
            <input className="emailb" type="email" placeholder="asdfghjkl@gmail.com" id="email" name="email" />
            <label className="plabel" >Password</label>
            <div className='pass-container'>
            <input className="password"  type="password" placeholder=".........." id="password" name="password"/>
            <img src={eyeicon} alt="Icon" className="eye-icon" /> 
            </div>
            
        </form>
        
        <a className="fpass">Forgot Password?</a>
        <div className='checkbox-container'>
        <img src={check} alt="Checkbox" className="check" />
        <label className="checklabel">Keep me signed in</label>
        </div>
        <button className="loginbutton">Login</button>
        <div className='orsign'>
            <div className='line'></div>
            <p className="or">or sign in with</p>
        </div>
        <button className="googlebutton">
            <img src={googleicon} alt="Google Icon" className="google-icon" />
                    Continue with Google
        </button>
        <a className="createacc">Create an account</a>
        </div>
        </>
    )  
}
