import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
    //Create default props to have data to work with
    //Also handy when a user doesn't insert any data
    static defaultProps = {
        recipes: [
          {
            title: "Spaghetti",
            instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
            ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
            img: "spaghetti.jpg"
          },
          {
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            img: "milkshake.jpg"
          },
          {
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "avocado_toast.jpg"
          }
        ]
    }

    static propTypes = {
        //Require the props to be of a certain type; in this case, an array of objects
        //The PropTypes from the Recipe class will require that the values of the keys of the objects must be strings.
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        //Place a list of recipes within the recipes variable
        const recipes = this.props.recipes.map((recipe, index) => (
                <Recipe key={index} {...recipe} />
        ));

        return (
            //Show the recipes on the front end
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;