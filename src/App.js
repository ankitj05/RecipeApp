import React, { useEffect, useState } from 'react';
import RecipeList from './Components/RecipeList';

import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('potato');

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar"
          type='text'
          placeholder="Potato"
          value={search}
          onChange={updateSearch} />
        <button className="search-button" type="Submit">
          <i className="fa fa-search fa-1g" aria-hidden="true"></i>
        </button>
      </form>
      <RecipeList recipeList={recipes} />
    </div>
  );
}

export default App;
