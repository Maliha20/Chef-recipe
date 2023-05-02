import React from "react";
import './Header.css'
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="bg-img pb-5">
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
