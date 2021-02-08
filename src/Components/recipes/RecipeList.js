import React, { useContext } from 'react'
import Recipe from './Recipes';
import RecipeContext from '../../context/recipe/recipeContext';
import Spinner from '../layout/Spinner';

const RecipeList = () => {

    const recipeContext = useContext(RecipeContext);
    const { loading, recipes } = recipeContext;

    if (loading) return <Spinner />
    else {
        return (
            <div className="recipes">
                {recipes.map(recipe => (
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

}

export default RecipeList
