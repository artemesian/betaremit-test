import React from 'react';
import DelButton from '../DelButton/DelButton.js'
import ModifButton from '../ModifButton/ModifButton.js'
import './Card.scss'

const Card = ({_id,name,type,price,rating,warranty_years,available,onChangeMode,onGetId}) => {
  return (
    <div className="card-container">
      <div className="header">
        <span className={(available) ? "available" : "expired"}>{(available)?"Available":"Expired"}</span>
        <div className="option-icon">
          <ModifButton onChangeMode={onChangeMode} onGetId={onGetId} id={_id}/>
          <DelButton onChangeMode={onChangeMode} onGetId={onGetId} id={_id}/>
        </div>
      </div>
      <div className="body">
          <h1 className="name">{name.toUpperCase()}</h1>
          <p className="price">{"$"+price}</p>
          <p className="warranty">{warranty_years} year(s) of warranty</p>
      </div>
      <div className="footer">
          <span className="type">{type}</span>
          <div className="rating-container">
          <ul className="rating" data-rating={Math.round(rating)}>
              {Array(5).fill(null).map((el,i)=><li key={i} className="rating__item"></li>)}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Card
