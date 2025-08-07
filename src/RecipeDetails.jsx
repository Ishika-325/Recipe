import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
