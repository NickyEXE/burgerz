import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {


  state = {
    search: "",
    filter: "All"
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    const searchFilteredBurgers = () => {
      return this.props.burgers.filter(burger => {
        return burger.name.toLowerCase().includes(this.state.search.toLowerCase())})
    }

    const typeFilteredBurgers = () => {
      if (this.state.filter !== "All"){
        return searchFilteredBurgers().filter(burger => burger.category === this.state.filter)
      }
      else{
        return searchFilteredBurgers()
      }
    }
    
    return (
      <div className="BurgerContainer">
        <h3>Amazing Burger Searcher:</h3>
        <form >
          <label>Search: </label><input name="search" onChange={this.onChange} value={this.state.search}></input>
        </form>
        <BurgerFilter onChange={this.onChange} filter={this.state.filter} />
        <BurgerList burgers={typeFilteredBurgers()} selectBurger= {this.props.selectBurger} removeBurger={this.props.removeBurger} />
      </div>
    )
  }
}
