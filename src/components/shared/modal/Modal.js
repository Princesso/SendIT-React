import React from 'react'
import './modal.css'

const Modal = ({
  toggleView,
  children
}) => {
  return(
    <div className="modal-bg">
      <div onClick={toggleView} className="overlay" />
      <div className="modal">
        {children}
        <button onClick={toggleView}>close</button>
      </div>
    </div>
  )
}

export default Modal