import React from 'react';

function RecipeList({ recipes, onSelectRecipe }) {
  return (
    <>
    
    <div className="recipe-list">
      
      {recipes.length === 0 ? null : (
        recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="recipe-card"
            onClick={() => onSelectRecipe(recipe)}
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default RecipeList;

