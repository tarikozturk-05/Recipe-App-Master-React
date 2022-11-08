import React from "react";
import NavbarDiv, { NavbarLi, NavbarUl } from "./Navbar.style";
// import logos from "../../assets/logo.jpg";
import ankakus from "../../assets/ankakus.png"
import { Link } from "react-router-dom";

const Navbar = () => {




  return (
    <NavbarDiv>
      <img
        style={{ borderRadius: "50%", cursor: "pointer",margin:"2.7rem"}}
        src={ankakus}
        height="100px"
        alt=""
      />
      <NavbarUl  >
        <NavbarLi>
          <Link  style={{color:"red" ,textDecoration:"none" }} to="/home">Home</Link>
        </NavbarLi>
        <NavbarLi  >
          <Link style={{color:"red" ,textDecoration:"none" }}  to="/about">About</Link>
        </NavbarLi>
        <NavbarLi>
          <Link style={{color:"red" ,textDecoration:"none" }} to="/contact">Contact</Link>
        </NavbarLi>
        <NavbarLi>
          <Link  style={{color:"red" ,textDecoration:"none" }} to="/">Logout</Link>
        </NavbarLi>
      </NavbarUl>
    </NavbarDiv>
  );
};

export default Navbar;
