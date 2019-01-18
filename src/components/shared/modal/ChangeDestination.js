import React from 'react'
import Modal from '../modal/Modal'

const ChangeParcelDestination = ({viewParcel, toggleView}) => {
  // const { viewParcel } = props;
  return(
    <div>
        {viewParcel && 
        <Modal toggleView={toggleView} className="modal">       
          <div className="form-holder">
          <form className="form"> 
              <h3>New Delivery Order</h3>
              <input type="text" placeholder="Item Name" id="item-name"/>
              <input type="number" placeholder="Approximate Weight in Kilograms" id="weight"/>
              <input type="text" placeholder="Parcel Pick-up Location" autoComplete="address-level2" id="from-address"/>
              <input type="text" placeholder="Recipient's Address" autoComplete="address-level2" id="to-address"/>
              <input type="number" placeholder="Recipient's phone number" id="recipient-phone"/>
              <input type="number" placeholder="Recipient's Name" id="recipient-name"/>
              <p id="created"></p>
              <button type="submit" className="send-parcel" id="send-parcel-button">Send Parcel</button>
            </form>
          </div>
        </Modal>
        }
        <button onClick={toggleView}>
          {viewParcel ? 'Hide' : 'View a delivery order'}
        </button>
      </div>
  )
}

export default ChangeParcelDestination