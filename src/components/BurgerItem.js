import React from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        {props.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.selectBurger(props.id)}>Show</button>
        <button onClick={()=> props.removeBurger(props.id)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
