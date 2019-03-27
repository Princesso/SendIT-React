import React from 'react'
import Modal from './Modal'
import {createParcel} from '../../../actions/userActions'
import {connect} from 'react-redux'
import { ClipLoader} from 'react-spinners'
import { toast } from 'react-toastify';

export class NewParcel extends React.Component {
  state = {
    itemName: '',
    weight: 0,
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    recipientName: '',
    loading: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit= async(e) => {
    const { toggleModalView} = this.props;
    e.preventDefault();
    const newDeliveryData = this.state;
    //write validation function
    this.setState({
      loading: true
    })
    this.props.createParcel(newDeliveryData , toggleModalView)
    .then(()=> {
        toast.success('Successful')
    })
    .catch(() => {
      toast.error('error while creating order, try again')
    })
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
                required 
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
                required 
                onChange={this.handleChange}
              />
              <input 
                type="text" 
                placeholder="Parcel Pick-up Location" 
                autoComplete="address-level3" 
                id="from-address"
                name="fromAddress"
                value={fromAddress}
                onChange={this.handleChange}
                required 
              />
              <input 
                type="text" 
                placeholder="Recipient's Address" 
                autoComplete="address-level3" 
                id="to-address"
                name="toAddress"
                value={toAddress}
                onChange={this.handleChange}
                required 
              />
              <input 
                type="number" 
                placeholder="Recipient's phone number" 
                id="recipient-phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                required 
                />
              <input 
                type="text" 
                placeholder="Recipient's Name" 
                id="recipient-name"
                name="recipientName"
                value={recipientName}
                onChange={this.handleChange}
                required 
              />
              <p id="created"></p>
              <button type="submit" id="submitBtn"><span className="loading"> <ClipLoader color={'white'} loading={this.state.loading} size={20} /><p>Send</p></span></button>
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