import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Footer.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="footer">
      <p>Copyright &copy; PSG iTech  {new Date().getFullYear()}<br/><a href="mailto:alumni@psgitech.ac.in">alumni@psgitech.ac.in</a></p>
    </div>
  );
}

export default Navbar;