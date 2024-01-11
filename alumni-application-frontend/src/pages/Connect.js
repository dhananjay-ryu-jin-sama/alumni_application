import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import '../styles/connect.css'
import Signup from "../pages/Signup";



function Connect() {
  return (
    <div>
      <div className='one'>
          <p>Connect</p>
      </div>
      <div className='content'>
      <Link to="/signup">
        <button onClick={Signup} className="global">Global Chat</button>
      </Link>
      <Link to="/signup">
        <button onClick={Signup} className="community">Community Chat</button>
      </Link>
      </div> 
      <Footer/>
    </div>
  )
}

export default Connect
