import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const ChefRecipeCard = ({recipesCard}) => {
    const[favorite,setFavoite]=useState(false)
   
    const{recipe_name,cooking_method,ingredients
    }=recipesCard;
    const notify = () =>{
        toast("Wow added Favorite!");
        setFavoite(true)

    } 
    return (
         
      <div className='px-10 py-5 sm:px-2 sm:py-2'>
  <div className="card bg-purple-500  shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-2xl font-bold">{recipe_name}</h2>
      <p className="text-xl font-bold">Ingredients:</p>
      <ul className="list-disc">
        {ingredients.map(ing=><li >{ing}</li>)}
      </ul>
      <p className="text-xl font-bold">Cooking Process:</p>
      <ol className="list-decimal">
        {cooking_method.map(cooking=><li >{cooking}</li>)}
      </ol>
      <div className="card-actions justify-center">
        <button onClick={notify} disabled={favorite} className="btn btn-primary">Favorite</button>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>

    );
};

export default ChefRecipeCard;