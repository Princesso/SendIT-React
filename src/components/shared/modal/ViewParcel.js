import React from 'react'
import Modal from './Modal'
import {Link} from 'react-router-dom'

class ViewParcel extends React.Component{
  render(){
    const { visible, toggleModalView, selectedUserParcel } = this.props;
    return (
      <div>
        {visible && 
        <Modal toggleModalView={toggleModalView} className="modal">      
          <div className="form-holder">
          <Link to="#" className="linker">Track Order</Link><br/> 
            <form className="form"> 
              <p><span className="title">Order ID : </span><span className="info" >{selectedUserParcel.id}</span></p><br/><hr/>
              <p><span className="title">Placed At : </span><span className="info" >{selectedUserParcel.fromaddress}</span></p>
              <p><span className="title">Current Location : </span><span className="info" >{selectedUserParcel.currentlocation}</span></p><br/> 
              <p><span className="title">Destination : </span><span className="info" ></span>{selectedUserParcel.toaddress}</p><br/> <hr/>
              <p><span className="title">Item Weight : </span><span className="info" ></span>{selectedUserParcel.weight} kg</p><br/> 
              <p><span className="title">Order Status :</span><span className="info" ></span>{selectedUserParcel.status}</p><br/>  <hr/>
              <p><span className="title">Approximate Price : </span><span className="info"></span>{selectedUserParcel.id}<br/></p>
              <div className="view-parcel-buttons-div">
              <Link to="/"> <button className="change-destination">Edit</button> </Link>
              <div></div>
              <Link to="/"><button className="cancel-order">Cancel Order</button></Link>
           </div>
          </form>
          </div>
        </Modal>
        }
      </div>
    )
  }
}

export default ViewParcel