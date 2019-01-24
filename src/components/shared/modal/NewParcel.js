import React from 'react'
import Modal from './Modal'
import {createParcel} from '../../../actions/userActions'
import {connect} from 'react-redux'

class NewParcel extends React.Component {
  state = {
    itemName: '',
    weight: 0,
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    recipientName: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {
    e.preventDefault();
    const newDeliveryData = this.state;
    //write validation function
    this.setState({
      itemName: '',
      weight: 0,
      fromAddress: '',
      toAddress: '',
      phoneNumber: '',
      recipientName: ''
    })
    this.props.createParcel(newDeliveryData)
  }

  render(){
    const { toggleModalView, visible } = this.props;
    const { itemName, weight, fromAddress, toAddress, phoneNumber, recipientName } = this.state
    return (
      <div>
        {visible && 
        <Modal toggleModalView={toggleModalView} className="modal">       
          <div className="form-holder">
            <form className="form" method="post" onSubmit={this.handleSubmit}> 
              <h3>New Delivery Order</h3>
              <input 
                type="text" 
                placeholder="Item Name" 
                id="item-name"
                name="itemName"
                value={itemName}
                onChange={this.handleChange}
              />
              <input 
                type="number" 
                placeholder="Approximate Weight in Kilograms" 
                id="weight"
                name="weight"
                value={weight}
                onChange={this.handleChange}
              />
              <input 
                type="text" 
                placeholder="Parcel Pick-up Location" 
                autoComplete="address-level2" 
                id="from-address"
                name="fromAddress"
                value={fromAddress}
                onChange={this.handleChange}
              />
              <input 
                type="text" 
                placeholder="Recipient's Address" 
                autoComplete="address-level2" 
                id="to-address"
                name="toAddress"
                value={toAddress}
                onChange={this.handleChange}
              />
              <input 
                type="number" 
                placeholder="Recipient's phone number" 
                id="recipient-phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                />
              <input 
                type="text" 
                placeholder="Recipient's Name" 
                id="recipient-name"
                name="recipientName"
                value={recipientName}
                onChange={this.handleChange}
              />
              <p id="created"></p>
              <div className="send-parcel-button-div"><button type="submit" className="send-parcel" id="send-parcel-button">Send Parcel</button></div>
            </form>
          </div>
        </Modal>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  newParcel: state.newParcel
})

export default connect(mapStateToProps, {createParcel})(NewParcel)