import React from "react";
import "./ChefCard.css";
import { FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
  const { id, picture_url, name, likes, years_of_experience, num_recipes } =
    chef;
  return (
    <div className="container p-5 my-5 col-12 col-lg-3 bg-body-tertiary rounded shadow-lg bgCard">
      <div>
        <LazyLoad height={150} width={250} threshold={0.6}>
          <img
            className="chef-image w-100 h-100 mb-3"
            src={picture_url}
            alt=""
          />
        </LazyLoad>
      </div>
      
      <h3 className="fs-3 text-danger mt-4">{name}</h3>
      <h5>Years of experience: {years_of_experience}</h5>
      <h5 className="mb-3">Recipes Developed:{num_recipes}</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <FaHeart className="text-danger" /> {likes}
        </div>
        <Link to={`/details/${id}`}>
          <Button variant="info">View Recipes</Button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
