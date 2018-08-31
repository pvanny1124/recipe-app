import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
            title="Pasta" 
            ingredients={["Flour", "Water"]} 
            instructions="Mix ingredients"
            img="spaghetti.jpg"
        />
      </div>
      //Render recipe list
    );
  }
}

export default RecipeApp;
