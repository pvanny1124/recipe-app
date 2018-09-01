import React, { Component } from 'react';
import Navbar from './Navbar';
import './RecipeApp.css';
import RecipeList from './RecipeList'; //Don't need to add the .js extension because by default, React assumes it is js

//Display all components we have created here
class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg"
        },
        {
          id: 2,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id: 3,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        }
      ],
      nextRecipeId: 3
    }
  }
  render() {
    //All JS logic would go within the render block here.
    return (
      //Components must be wrapped within a div
      <div className="App">
        <Navbar />
        <RecipeList recipes={this.state.recipes}/>
      </div>

    );
  }
}

export default RecipeApp; //Export default to be able to name the component differently in another file.
