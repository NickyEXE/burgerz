import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

const API = "http://localhost:3001/burgers/"

class App extends Component {

  state = {
    burgers: [],
    selectedBurger: 1,
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(res => this.setState({burgers: res}))
  }

  findBurger = (id) => this.state.burgers.find(burger => burger.id === id)

  selectBurger = (id) => this.setState({selectedBurger: id})

  updateBurger = (newBurger) => {
    this.setState({burgers: [...this.state.burgers.filter(burger => burger.id !== newBurger.id), newBurger]})
  }

  removeBurger = (id) => {
    this.setState({burgers: this.state.burgers.filter(burger => burger.id !== id)})
  }

  changeBurger = (id, category) => {
    fetch(API + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: category})
    })
    .then(res => res.json())
    .then(burger => this.updateBurger(burger))
  }

  sortBurgers = () => this.state.burgers.sort((burgerA, burgerB) => burgerA.name.localeCompare(burgerB.name))


  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.sortBurgers()} removeBurger={this.removeBurger} selectBurger={this.selectBurger} />
        <BurgerDisplay {...this.findBurger(this.state.selectedBurger)} onChange={this.changeBurger} />
      </div>
    );
  }
}

export default App;
