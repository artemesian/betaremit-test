import React from 'react';
import Card from "../../Components/Card/Card.js";
import Spinner from "../../Components/Spinner/Spinner.js";
import './List.scss'

const List = ({Products,onChangeMode, onGetId}) => {
  return (
    <div className="list-container">
      {(Products.length > 0)?
        Products.map((product) => <Card key={product._id} {...product} onChangeMode={onChangeMode} onGetId={onGetId}/>)
      :
        <Spinner/>
      }
    </div>
  )
}

export default List
