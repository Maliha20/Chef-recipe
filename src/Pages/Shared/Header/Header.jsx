import React from "react";
import './Header.css'
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="bg-img pb-5">
      <nav className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <img className="logo-img" src={logo} alt="" />

      <div className="d-flex flex-column flex-md-row mb-2">
        <ActiveLink to="/home">
          <p className="nav-link">Home</p>
        </ActiveLink>
        <ActiveLink to="/home/blog">
          <p className="nav-link">Blog</p>
        </ActiveLink>
        <ActiveLink to="/home/about">
         <p className="nav-link">About</p>
        </ActiveLink>
      </div>
      <Link to='/login'><Button className="px-4 mx-4 mb-5" variant="warning">Login</Button></Link>
    </nav>
      <div className=" d-flex flex-column justify-content-center">
       <h2 className="food-slogan text-center font mb-5 ">Korean food, <br />
       a feast for the senses</h2>
       <Button variant="info" className="px-5 mx-auto mb-5">Join</Button>
       <h5 className="food-slogan fs-3 text-center">
        Join us for new recipes daily
       </h5>
      </div>
    </div>
  );
};

export default Header;
