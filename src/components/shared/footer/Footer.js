import React from 'react';
import './footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return(
    <div className="footer">
      <div>Copyright made by Oluebube Princess Egbuna © 2018</div>
      <div>
        <ul>
          <li><Link to="/" className="link">Contact</Link></li>
          <li><Link to="/" className="link">FAQs</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer