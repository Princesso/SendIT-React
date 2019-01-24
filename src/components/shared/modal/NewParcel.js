import React from 'react'
import Modal from './Modal'

class NewParcel extends React.Component {
  // constructor() {
  //   super()
  //   this.state = { viewParcel: false }
  //   this.toggleView = this.toggleView.bind(this)
  // }

  // toggleView() {
  //   this.setState({viewParcel: !this.state.viewParcel})
  // } 

  render(){
    const { viewParcel } = this.props;
    return (
      <div>
        {viewParcel && 
        <Modal toggleView={this.props.toggleView} className="modal">       
          <div className="form-holder">
            <form className="form"> 
              <h3>New Delivery Order</h3>
              <input type="text" placeholder="Item Name" id="item-name"/>
              <input type="number" placeholder="Approximate Weight in Kilograms" id="weight"/>
              <input type="text" placeholder="Parcel Pick-up Location" autocomplete="address-level2" id="from-address"/>
              <input type="text" placeholder="Recipient's Address" autocomplete="address-level2" id="to-address"/>
              <input type="number" placeholder="Recipient's phone number" id="recipient-phone"/>
              <input type="number" placeholder="Recipient's Name" id="recipient-name"/>
              <p id="created"></p>
              <button type="submit" class="send-parcel" id="send-parcel-button">Send Parcel</button>
            </form>
          </div>
        </Modal>
        }
        {/* <button onClick={this.props.toggleView}>
          {viewParcel ? 'Hide' : 'Show new delivery order'}
        </button> */}
      </div>
    )
  }
}

export default NewParcel