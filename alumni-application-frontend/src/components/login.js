// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending credentials to a server
    console.log('Submitted:', { username, password });
  };

  return (
    <div style={loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <p style={forgotPassword}>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <p style={gmailLink}>
          <a href="https://mail.google.com/">Login with Gmail</a>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Styles (you can customize these)
const loginContainer = {
  maxWidth: '300px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '50px',
};

const forgotPassword = {
  marginTop: '10px',
  marginBottom: '10px',
};

const gmailLink = {
  color: '#4285F4',
  textDecoration: 'none',
  marginTop: '10px',
  display: 'block',
};

export default Login;


// import googleicon from '../assets/Group.png';
// import eyeicon from '../assets/eye.png';
// import check from '../assets/Checkmark.png';
// import React from "react";
// import '../styles/Login.css';
// const Login = () => {
//     return (
//         <div className="logincontainer">
//             <h1 className='psg'>
//             <span className='psg'>PSG</span>
//             <span className='itech'>ITECH</span>
//             </h1>
//         <form className="loginform" >
//             <label className="elabel">Email Address</label>
//             <input className="emailb" type="email" placeholder="asdfghjkl@gmail.com" id="email" name="email" />
//             <label className="plabel" >Password</label>
//             <div className='pass-container'>
//             <input className="password"  type="password" placeholder=".........." id="password" name="password"/>
//             <img src={eyeicon} alt="Icon" className="eye-icon" /> 
//             </div>
            
//         </form>
        
//         <a className="fpass">Forgot Password?</a>
//         <div className='checkbox-container'>
//         <img src={check} alt="Checkbox" className="check" />
//         <label className="checklabel">Keep me signed in</label>
//         </div>
//         <button className="loginbutton">Login</button>
//         <div className='orsign'>
//             <div className='line'></div>
//             <p className="or">or sign in with</p>
//         </div>
//         <button className="googlebutton">
//             <img src={googleicon} alt="Google Icon" className="google-icon" />
//                     Continue with Google
//         </button>
//         <a className="createacc">Create an account</a>
//         </div>
//     )  
// }
// export default Login;