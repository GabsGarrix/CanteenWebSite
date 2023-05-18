import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/lunches">Lunches</Link>
          <Link to="/about">About</Link>
          <Link to="/sugestions">Sugestions</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/lunches">Lunches</Link>
        <Link to="/about">About</Link>

        <Link to="/sugestions">Sugestions</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
