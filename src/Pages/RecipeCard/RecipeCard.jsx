import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./RecipeCard.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
  const [disable, setDisable] =useState(false)
  const { pic, r_name, r_description, cooking_method, r_rating, ingredients } =
    recipe;


    const handleFavorite= ()=>{
        setDisable(true);
        toast("Added to favorites!");  
    }
  return (
    <div className="container p-5 my-5 col-12 col-lg-3 bg-body-tertiary rounded shadow-lg">
      <div>
        <Card>
          <Card.Img className="recipe-image mb-3" variant="top" src={pic} />
          <Card.Body>
            <Card.Title className="text-danger fs-3">{r_name}</Card.Title>
            <Card.Text>
              <span className="fw-bold text-secondary">About the dish: </span>
              {r_description}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold text-secondary">Cooking Method: </span>
              {cooking_method}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold text-secondary">Ingredients: </span>
              {ingredients}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
            <Rating style={{ maxWidth: 100 }} value={r_rating} readOnly />
            <Button onClick={handleFavorite} disabled={disable} variant="warning">Favorite</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
