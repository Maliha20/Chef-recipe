
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import ChefBanner from '../ChefBanner/ChefBanner';

const ChefDetails = () => {
    const chefData = useLoaderData();
    const {recipes,_id} =chefData;
    
    
    return (
        <div>
            <ChefBanner></ChefBanner>
            <div className='container mx-auto '>
                <h2 className='text-center text-danger my-5'>Top 3 Recipes</h2>
            </div>
          <div className='row gap-3'>
              {
                recipes.map(recipe=>
                <RecipeCard recipe={recipe} key={_id}></RecipeCard>)
               }
              </div>
        </div>
    );
};

export default ChefDetails;