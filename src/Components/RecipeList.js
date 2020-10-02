import React from 'react'
import Recipe from './Recipes';


const RecipeList = ({ recipeList }) => {
    return (
        <div className="recipes">
            {recipeList.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    ingredients={recipe.recipe.ingredients}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                />
            ))}
        </div>
    )
}

export default RecipeList
