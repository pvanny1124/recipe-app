import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
    //Create default props to have data to work with
    //Also handy when a user doesn't insert any data

    static propTypes = {
        //Require the props to be of a certain type; in this case, an array of objects
        //The PropTypes from the Recipe class will require that the values of the keys of the objects must be strings.
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        //Place a list of recipes within the recipes variable
        const recipes = this.props.recipes.map((recipe, index) => (
                <Recipe key={recipe.id} {...recipe} /> //Use rest (ES2015) to pass in recipe information
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