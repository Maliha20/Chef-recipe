import React from "react";
import "./ChefBanner.css";
import { useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefBanner = () => {
  const chefData = useLoaderData();
  const {
    picture_url,
    name,
    bio,
    likes,
    years_of_experience,
    num_recipes,
    recipes,
  } = chefData;
  return (
    <div className="b-ground">
      <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
        
       
        <LazyLoad threshold={0.95}>
        <div className="container size my-5 p-4">
        <img
            className="w-100 h-100 border border-5"
            src={picture_url}
            alt=""
          />
            </div>
    </LazyLoad>
      
        <div className="container chef-bio p-5">
          <h3 className="text-white fs-1">{name}</h3>
          <h5 className="text-white fs-3">{bio}</h5>
          <h5 className="text-white fs-3">Experience: {years_of_experience}</h5>
          <h5 className="text-white fs-3">Recipes developed: {num_recipes}</h5>
          <p className="text-white fs-4">
            <FaHeart className="text-danger" /> {likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
