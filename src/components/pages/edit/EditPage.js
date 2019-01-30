import React, {Component} from 'react'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import MapContainer from '../../shared/map/Map'

const EditPage = () => {
  return(
    <div>
      <Header/>
      {/* <div className="form-holder">
        <form 
          className="form" 
          method="post" 
          // onSubmit={this.handleSubmit}
        > 
          <h3>Edit Delivery Order</h3>
          <input 
            type="text" 
            placeholder="Item Name" 
            id="item-name"
            name="itemName"
            // value={itemName}
            // onChange={this.handleChange}
            readOnly
          />
          <input 
            type="number" 
            placeholder="Approximate Weight in Kilograms" 
            id="weight"
            name="weight"
            // value={weight}
            // onChange={this.handleChange}
            readOnly
          />
          <input 
            type="text" 
            placeholder="Parcel Pick-up Location" 
            autoComplete="address-level2" 
            id="from-address"
            name="fromAddress"
            // value={fromAddress}
            // onChange={this.handleChange}
            readOnly
          />
          <input 
            type="text" 
            placeholder="Recipient's Address" 
            autoComplete="address-level2" 
            id="to-address"
            name="toAddress"
            // value={toAddress}
            // onChange={this.handleChange}
          />
          <input 
            type="number" 
            placeholder="Recipient's phone number" 
            id="recipient-phone"
            name="phoneNumber"
            // value={phoneNumber}
            // onChange={this.handleChange}
            readOnly
            />
          <input 
            type="text" 
            placeholder="Recipient's Name" 
            id="recipient-name"
            name="recipientName"
            // value={recipientName}
            // onChange={this.handleChange}
            readOnly
          />
          <p id="created"></p>
          <div className="send-parcel-button-div"><button type="submit" className="send-parcel" id="send-parcel-button">Send Parcel</button></div>
          </form>
        </div> */}
        <MapContainer/>
      {/* <Footer/> */}
    </div>
  )
}

export default EditPage