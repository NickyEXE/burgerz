import React from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.imgURL} alt={props.name}/>
      <br/>
      <h1>{props.name}</h1>
      <br/>
      <select value={props.category} onChange={(e)=> props.onChange(props.id, e.target.value)}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
