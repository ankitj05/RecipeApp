import React, { useState, useContext } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import '../../App.css';

const Search = () => {

    const [search, setSearch] = useState('');

    const recipeContext = useContext(RecipeContext);

    const onChange = e => setSearch(e.target.value);

    const getSearch = (e) => {
        e.preventDefault();
        recipeContext.searchRecipes(search);
        setSearch('');
    }

    return (
        <div>
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar"
                    type='text'
                    placeholder="Ingredient"
                    value={search}
                    onChange={onChange} />
                <button className="search-button" type="Submit">
                    <i className="fa fa-search fa-1g" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;