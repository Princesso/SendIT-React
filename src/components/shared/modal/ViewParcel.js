import React from 'react'
import Modal from './Modal'

class ViewParcel extends React.Component{
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
              <a id="#"> Track Order</a><br/>
              <p><span className="title">Order ID </span><span className="info" id="order-id-detail"></span></p><br/><hr/>
              <p><span className="title">Placed At </span><span className="info" id="placed-at-detail"></span></p>
              <p><span className="title">Current Location </span><span className="info" id="current-location-detail"></span></p><br/> 
              <p><span className="title">Destination </span><span className="info" id="destination-detail"></span></p><br/> <hr/>
              <p><span className="title">Item Weight </span><span className="info" id="item-weight-detail"></span></p><br/> 
              <p><span className="title">Order Status </span><span className="info" id="order-status-detail"></span></p><br/>  <hr/>
              <p><span className="title">Approximate Price </span><span className="info" id="price-detail"></span><br/></p>
              <div>
              <button className="change-destination" id="change-destination-button" onClick>Change Destination</button> 
              <button className="cancel-order" id="cancel-order-button">Cancel Order</button>
           </div>
          </form>
          </div>
        </Modal>
        }
        {/* <button onClick={this.props.toggleView}>
          {viewParcel ? 'Hide' : 'View a delivery order'}
        </button> */}
      </div>
    )
  }
}

export default ViewParcel