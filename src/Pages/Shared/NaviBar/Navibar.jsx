import React from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navibar.css";
import { Button, Nav } from "react-bootstrap";
import profile from "../../../assets/profile.jpg";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navibar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <img className="logo-img" src={logo} alt="" />

      <div className="d-flex">
        <ActiveLink to="/home">
          <p className="nav-link" >Home</p>
        </ActiveLink>
        <ActiveLink to="/home/blog">
        <p className="nav-link" >Blog</p>
        </ActiveLink>
        <ActiveLink to="/home/about">
        <p className="nav-link">About</p>
        </ActiveLink>
       
      </div>
      <Link to='/login'><Button className="px-4 mx-4" variant="warning">Login</Button></Link>
    </nav>
  );
};

export default Navibar;
