import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
    static PropTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }
    
    render() {
        //Use object destructuring to create variables to capture the props
        const { title, img, instructions } = this.props
        //Place all ingredients within <li> tags and save these to the variable ingredients
        const ingredients = this.props.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li> 
                //When using tags, whether it be a component or native html tag,
                //You need to specify a key to id every li.
                //This is why we use index to fill a key value for each li.
        ));

        return (

            <div className="recipe-card">
                    <div className="recipe-card-img">
                        {/* Anything within curly braces is JS */}
                        <img src={img} alt={title} /> 
                    </div>

                    <div className="recipe-card-content">
                        <h3 class="recipe-title">Recipe {title}</h3>

                        <h4>Ingredients:</h4>
                        <ul>{ingredients}</ul>

                        <h4>Instructions:</h4>
                        <p>{instructions}</p>
                        
                    </div>
            </div>
            
            
        );
    }
}

export default Recipe