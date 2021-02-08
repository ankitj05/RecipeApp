import React from 'react';
import './App.css';
import Search from './Components/recipes/Search';
import RecipeList from './Components/recipes/RecipeList';
import RecipeState from './context/recipe/RecipeState';

const App = () => {
  return (
    <RecipeState>
      <div className="App">
        <Search />
        <RecipeList />
      </div>
    </RecipeState>
  );
}

export default App;
