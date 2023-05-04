import React, { useContext } from "react";
import './Header.css'
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Dropdown, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";


const Header = () => {
  const {user, logOut} =useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="bg-img pb-5">
      <nav className=" d-flex flex-column flex-md-row justify-content-between align-items-center">
      <Link to='/home'><img className="logo-img" src={logo} alt="" /></Link>

      <div className="d-flex flex-column flex-md-row mb-2">
      
        <ActiveLink to="/home">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
      
      </div>
      <div>
     
      {  
        user ?
        <Dropdown>
        <Dropdown.Toggle variant="link" bsPrefix="p-0">
         <img title={user.displayName} className="user-profile me-5" src={user.photoURL} alt="" />
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
       
       : <Link to='/'><Button className="px-4 mx-4 mb-5" variant="warning">Login</Button></Link>
      }
      </div>
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
