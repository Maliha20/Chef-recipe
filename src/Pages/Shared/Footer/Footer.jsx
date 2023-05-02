import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitch, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bgFooter d-flex flex-column justify-content-center flex-md-row py-4">
      
        
        <div className="bg-white mx-5 p-3 rounded">
        <h3 className="text-warning fs-2 fw-bold">단밤</h3>
        <p className="fs-3 fw-bold text-warning">Never miss a new recipe!</p>
        <p className="fs-6">
          Join 20,000+ other Korean food lovers! <br /> Get the latest recipes from My
          Korean Kitchen delivered to your email inbox. <br /> It's free!
        </p>
        <input className="me-2 mb-2" type="text" name="name" id="" placeholder="Your Name"/>
        <input className="mb-2" type="email" name="email" id="" placeholder="Email"/>
        <button variant="danger" className="bg-danger text-white px-4 mx-4">Subscribe</button>
        </div>
        <div className="mx-5 mb-3">
            <h4 className="text-center">Connect</h4>
            <div className='d-flex flex-row justify-content-center'>
                    <p><FaPinterest className="text-white fs-3 mb-2 me-2" /></p>
                    <p><FaFacebook className="text-white fs-3 mb-2 me-2" /></p>
                    <p><FaInstagram className="text-white fs-3 mb-2 me-2" /></p>
                    <p><FaTwitter className="text-white fs-3 mb-2 me-2" /></p>
             </div>
        </div>
        <div className="mx-5 mb-3">
            <h4 className="text-center text-md-start">Information</h4>
            <div className='d-flex flex-column'>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">About</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Contact</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Privary Policy</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Terms and Conditions</p>
             </div>
        </div>
        <div className="mx-5 mb-3">
            <h4 className="text-center text-md-start">Explore</h4>
            <div className='d-flex flex-column'>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Korean Pantry Essentials</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Banchan Cookbook</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Korean BBQ Guide</p>
                    <p className="text-white fs-5 mb-2 mx-2 text-center text-md-start">Korean Drama Food</p>
             </div>
        </div>
     
    </div>
  );
};

export default Footer;
