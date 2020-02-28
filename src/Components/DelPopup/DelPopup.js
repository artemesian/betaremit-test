import React from 'react'
import './DelPopup.scss';

const DelPopup = ({onDelete,onChangeMode,current}) => {
  return (
    <div id="delpopup-container">
      <div id="delpopup-wrapper">
        <p className="message">Remove this product?</p>
        <div className="options">
          <button className="button-option cancel" onClick={()=>onChangeMode("")}>Cancel</button>
          <button className="button-option delete" onClick={() => {onDelete(current);onChangeMode("")}}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DelPopup
