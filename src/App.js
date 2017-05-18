import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './Ingredient/IngredientList'
import IngredientForm from './Ingredient/IngredientForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
  };

  componentWillMount() {
    console.log('componentWillMount()');
  };

  componentDidMount() {
    this.getIngredientList();
  };


  getIngredientList() {
    console.log('componentDidMount()');
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k'
    axios.get(URL)
    .then(response => {
      this.setState({ ingredients: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };








  render() {
    console.log('render()');
    return (
      <div className="App">
        <h1>Recipes Front End</h1>
        <IngredientForm getIngredientList={() => this.getIngredientList()} />
        {this.state.ingredients.length < 1 ? <p>Loading...</p> : <IngredientList ingredients={this.state.ingredients} />}
      </div>
    );
  }
}

export default App;
