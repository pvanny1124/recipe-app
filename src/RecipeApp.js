import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  static defaultProps = {
      recipes: PropTypes.arrayOf(PropTypes.object)[{
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      }]
  }

  render() {
    return (
      <div className="App">
        <Navbar />

      </div>

    );
  }
}

export default RecipeApp;
