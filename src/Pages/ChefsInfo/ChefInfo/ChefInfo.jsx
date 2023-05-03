import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefInfo = () => {

    const [chefs, setChefs] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=> res.json())
        .then(data =>setChefs(data))
    },[])
    return (
      <div className='container mx-auto '>
        <h2 className='text-center text-danger my-5'>Top Korean Chefs</h2>
          <div className='row gap-3'>
            
            {
                chefs.map(chef=>
                <ChefCard key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
        </div>
      </div>
    );
};

export default ChefInfo;