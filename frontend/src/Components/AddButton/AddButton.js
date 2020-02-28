import React from 'react'
import add from '../../assets/add.svg'
import './AddButton.scss'

const AddButton = ({onChangeMode}) => {
  return (
    <div>
      <button id="add" onClick={()=>onChangeMode("add")}>
        <img src={add} alt="add icon" className="add-icon"/>
      </button>
    </div>
  )
}
export default AddButton;
