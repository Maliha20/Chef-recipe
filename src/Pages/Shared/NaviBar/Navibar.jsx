import React from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navibar.css";
import { Button, Nav } from "react-bootstrap";
import profile from "../../../assets/profile.jpg";

const Navibar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <img className="logo-img" src={logo} alt="" />

      <div className="d-flex">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
       
      </div>
      <Button className="px-4 mx-4" variant="warning">Login</Button>
    </nav>
  );
};

export default Navibar;
