import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
// import 'react-lazy-load-image-component/src/effects/blur.css';
const Card = ({card}) => {

    const{name,picture,years_of_experience,num_recipes,likes,category__id

    }=card
    return (
      // Category 6 card show home page section part 

      <div className="card w-full md:w-96 shadow-xl">
       
      <figure className="px-10 mt-2 w-full md:w-96 rounded-xl pt-10">
     <LazyLoad>
       <img src={picture}   alt="Shoes" className="rounded-xl h-48 w-full" />
     </LazyLoad>
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">Chef Name: {name}</h2>
        <div className="flex flex-wrap justify-between">
          <p>Years of experience: {years_of_experience}</p>
          <p>Likes: {likes}</p>
          <p>Numbers of recipes: {num_recipes}</p>
        </div>
        <div className="card-actions mx-auto">
          <button className="btn-primary">
            <Link to={`/recipe/${category__id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
      
    );
};

export default Card;