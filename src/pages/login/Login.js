import React, { useState } from "react";
import LoginDiv, { LoginButton, LoginLabel, Loginİnput } from "./Login.style";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [change, setChange] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setChange({
      ...change,
      [e.target.id]: e.target.value
    });
  };
  console.log(change);
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("change", JSON.stringify(change));
   {change && navigate("/home") } 
    setChange({
      name: "",
      password: "",
    });
  };

  return (
    <div className="login" >

  
    <LoginDiv>
      <h1 className="display-2 text-danger fw-3 "  >LOGİN</h1>
      <img style={{ width: "200px" }} src={home} alt="" />
      <form onSubmit={handleSubmit} action="">
        <LoginLabel htmlFor="">Enter Your Name</LoginLabel>
        <br />
        <Loginİnput
          value={change.name}
          onChange={handleChange}
          type="text"
          id="name"
          required
            placeholder="username"
        />
        <br />
        <LoginLabel htmlFor="">Enter Your Password</LoginLabel>
        <br />
        <Loginİnput
          value={change.password}
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="password"
          required
        />
        <br />
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </LoginDiv>
      </div>
  );
};

export default Login;
