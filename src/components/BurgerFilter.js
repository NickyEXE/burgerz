import React from 'react';

const BurgerFilter = (props) => {
  return (
    <div className="BurgerFilter">
      <select onChange={props.onChange} value={props.filter} name="filter">
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
