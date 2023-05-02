import React from 'react';
import './ChefCard.css'
import { FaHeart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const ChefCard = ({chef}) => {
    console.log(chef)
    const{picture_url, name, likes, years_of_experience, num_recipes } = chef;
    return (
        <div className='container p-5 col-sm col-md-4 bg-body-tertiary rounded shadow-lg bgCard'>
            <div>
            <img className='chef-image' src={picture_url} alt="" />
            </div>
            <h3 className='fs-3'>{name}</h3>
            <h4>Years of experience: {years_of_experience}</h4>
            <h4>Recipes Developed:{num_recipes}</h4>
            <div className='d-flex justify-content-between'>
            <p><FaHeart className='text-danger'/> {likes}</p>
            <Button variant='danger'>View Recipes</Button>
            </div>
        </div>
    );
};

export default ChefCard;