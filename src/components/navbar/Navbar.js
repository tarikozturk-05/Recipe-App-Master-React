import React from "react";
import NavbarDiv, { NavbarLi, NavbarUl } from "./Navbar.style";
import logos from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {




  return (
    <NavbarDiv>
      <img
        style={{ borderRadius: "50%", cursor: "pointer" }}
        src={logos}
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
          <Link  style={{color:"red" ,textDecoration:"none" }} to="/">Logaut</Link>
        </NavbarLi>
      </NavbarUl>
    </NavbarDiv>
  );
};

export default Navbar;
