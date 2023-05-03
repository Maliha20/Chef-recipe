import React, { useContext } from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navibar.css";
import { Button, Dropdown, Nav, NavDropdown } from "react-bootstrap";
import profile from "../../../assets/profile.jpg";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navibar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="d-flex justify-content-between align-items-center shadow-lg">
      <Link to="/home">
        <img className="logo-img" src={logo} alt="" />
      </Link>

      <div className="d-flex">
        <ActiveLink to="/home">
          <p className="nav-link">Home</p>
        </ActiveLink>
        <ActiveLink to="/blog">
          <p className="nav-link">Blog</p>
        </ActiveLink>
        <ActiveLink to="/about">
          <p className="nav-link">About</p>
        </ActiveLink>
      </div>
      {user ? (
        <Dropdown>
          <Dropdown.Toggle variant="link" bsPrefix="p-0">
            <FaUserCircle className="user-profile me-5"></FaUserCircle>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Button
              onClick={handleLogout}
              className="px-4 mx-4 mb-5"
              variant="warning"
            >
              Logout
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        

        <Link to="/login">
          <Button className="px-4 mx-4 mb-5" variant="warning">
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navibar;
