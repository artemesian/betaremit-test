import React from 'react'
import del from "../../assets/delete.png";
import './DelButton.scss'

const DelButton = ({id,onChangeMode,onGetId}) => {
  return (
    <img src={del} alt="delete icon" className="delete" onClick={() => {onChangeMode("del");onGetId(id)}}/>
  )
}

export default DelButton;