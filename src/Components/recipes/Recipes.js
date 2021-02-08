import React from 'react'
import { v4 as uuid } from 'uuid';

const Recipes = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h1 className="title">{title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li key={uuid()} className="ingredientList">{ingredient.text}</li>
            ))}</ol>
            <p className="calories">{parseInt(calories)} calories per serving</p>
            <img className="image" src={image} alt={title} />
        </div>
    )
}

export default Recipes