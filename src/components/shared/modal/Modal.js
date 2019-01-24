import React from 'react'
import './modal.css'

const Modal = ({
  toggleModalView,
  children
}) => {
  return(
    <div className="modal-bg">
      <div onClick={toggleModalView} className="overlay" />
      <div className="modal">
        {children}
        <button onClick={() => toggleModalView()} className="close-modal">close</button>
      </div>
    </div>
  )
}

export default Modal