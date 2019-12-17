import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  const renderBurgers = () => {
    return props.burgers.map(burger => <BurgerItem key={burger.id} selectBurger={props.selectBurger} {...burger} removeBurger={props.removeBurger}/>)
  }
  return (
    <div className="BurgerList">
      {renderBurgers()}
    </div>
  )
}

export default BurgerList
