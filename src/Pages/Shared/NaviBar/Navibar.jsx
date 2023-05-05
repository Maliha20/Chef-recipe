import React, { useContext } from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navibar.css";
import { Button, Dropdown} from "react-bootstrap";

import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";


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
    <nav className=" d-flex flex-column flex-md-row justify-content-between align-items-center shadow-lg">
      <Link to="/home">
        <img className="logo-img" src={logo} alt="" />
      </Link>

      <div className="d-flex flex-column flex-md-row my-4">
      <ActiveLink to="/home">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
      </div>
      {user ? (
        <Dropdown>
          <Dropdown.Toggle variant="link" bsPrefix="p-0">
          <img title={user.displayName} className="user-profile me-5 mb-3" src={user.photoURL} alt="" />
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
        

        <Link to="/">
          <Button className="px-4 me-4 mb-5" variant="warning">
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navibar;
