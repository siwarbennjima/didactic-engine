import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'

class BurgerBuilder extends Component {

  state = {
    ingredients: [
      {
        label: "salad",
        count: 1
      },
      {
        label: "cheese",
        count: 2
      },
      {
        label: "meat",
        count: 1
      },
      {
        label: "escalope",
        count: 0
      }
    ],
    // x: {
    //   salad: 2,
    //   chesse: 1,
    //   meat: 0,
    //   escalope: 1
    // }
  }

  handleLess = (label) => {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.label === label)
          return {
            label: ingredient.label,
            count: ingredient.count - 1
          }
        else
          return ingredient;
      })
    })
  }
  handlemore = (label) => {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.label === label)
          return {
            label: ingredient.label,
            count: ingredient.count + 1
          }
        else
          return ingredient;
      })
    })
  }



  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} handleLess={this.handleLess} handlemore={this.handlemore} />
      </div>
    )
  }
}

export default BurgerBuilder