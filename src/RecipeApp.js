import React, { Component } from 'react';
import Navbar from './Navbar';
import './RecipeApp.css';
import RecipeList from './RecipeList'; //Don't need to add the .js extension because by default, React assumes it is js

//Display all components we have created here
class RecipeApp extends Component {
  render() {
    //All JS logic would go within the render block here.
    return (
      //Components must be wrapped within a div
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>

    );
  }
}

export default RecipeApp; //Export default to be able to name the component differently in another file.
