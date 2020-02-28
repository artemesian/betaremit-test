import React from 'react'
import modify from "../../assets/modif-blue.svg"
import './ModifButton.scss'

const ModifButton = ({ id, onChangeMode,onGetId }) => {
  return (
    <img src={modify} alt="modify icon" className="modif" onClick={() => { onChangeMode("modif"); onGetId(id) }}/>
  )
}

export default ModifButton
