import React from 'react';
import './main-content.css'

const MainContent = ({ children }) => {
  return(
    <div className="main-content">
      {children}
    </div>
  )
}

export default MainContent