import React, { useReducer } from 'react';
import RecipeContext from './recipeContext';
import RecipeReducer from './recipeReducer';
import {
    SEARCH_RECIPES,
    SET_LOADING
} from '../../types';

let recipeID;
let recipeKey;

recipeID = process.env.REACT_APP_APP_ID;
recipeKey = process.env.REACT_APP_APP_KEY;

const RecipeState = (props) => {

    const initialState = {
        recipes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(RecipeReducer, initialState);

    const searchRecipes = async (query) => {

        setLoading();
        const url = `https://api.edamam.com/search?q=${query}&app_id=${recipeID}&app_key=${recipeKey}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.hits);

        dispatch({
            types: SEARCH_RECIPES,
            payload: data.hits,
        })
    }

    const setLoading = () => dispatch({ types: SET_LOADING });

    return <RecipeContext.Provider
        value={{
            recipes: state.recipes,
            loading: state.loading,
            searchRecipes,
            setLoading
        }}>
        {props.children}
    </RecipeContext.Provider>
}

export default RecipeState;