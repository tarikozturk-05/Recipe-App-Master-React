import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRouter />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/*        */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default AppRouter;
