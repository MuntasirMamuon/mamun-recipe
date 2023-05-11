import React from "react";
import ChefRecipeCard from "../../ChefRecipeCards/ChefRecipeCard";

const RecipeDetailsCard = ({ recipe }) => {
  const {
    _id,
    description,
    name,
    num_recipes,
    likes,
    years_of_experience,
    picture,
    recipes,
  } = recipe;

  return (

    <div className="max-w-screen-lg mx-auto">
  <div className="flex flex-col lg:flex-row items-center shadow-xl banner-shadow bg-purple-300 py-5">
    <div className="mx-auto lg:mx-0 lg:mr-5">
      <img className="img-style w-full" src={picture} alt="" />
    </div>
    <div className="px-2 lg:px-10 mt-2 lg:mt-0">
      <h2 className="text-2xl font-bold">Chef Name: {name}</h2>
      <p className="mt-1"> <span className="text-style"> Chef Description:</span> {description}</p>
      <div className="mt-2">
        <p > <span className="text-style">Likes: </span> {likes}</p>
        <p > <span className="text-style">Number of recipes:</span>  {num_recipes}</p>
        <p > <span className="text-style">Years of experience:</span>  {years_of_experience}</p>
      </div>
    </div>
  </div>

  {/* chef recipe cards section */}

  <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {recipes.map((recipesCard) => (
      <ChefRecipeCard key={_id} recipesCard={recipesCard} />
    ))}
  </div>
</div>

  );
};

export default RecipeDetailsCard;
