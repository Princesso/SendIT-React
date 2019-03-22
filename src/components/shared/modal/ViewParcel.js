import React from 'react'
import Modal from './Modal'
import {Link} from 'react-router-dom'
import { cancelUserParcel } from '../../../actions/userActions';
import { toast } from 'react-toastify';
import {connect} from 'react-redux'

class ViewParcel extends React.Component{
  constructor(){
    super()
    this.state = {}
    this.handleCancelParcel = this.handleCancelParcel.bind()
  }

  handleCancelParcel = (e) => {
    const { toggleModalView } = this.props;
    e.preventDefault()
    const parcelId = this.props.selectedUserParcel.id
    this.props.cancelUserParcel(parcelId, toggleModalView)
    .then(() => {
      toast.success('You canceled this order')
    })
    .catch(()=> {
      toast.error('An error occurred while trying to cancel your order')
    })
  }

  render(){
    const { visible, toggleModalView, selectedUserParcel } = this.props;
    return (
      <div>
        {visible && 
        <Modal toggleModalView={toggleModalView} className="modal">      
          <div className="form-holder">
          <Link to = {`/edit/${selectedUserParcel.id}`} className="linker">Track Order</Link><br/> 
            <form className="form"> 
            <hr/><p className="order-detail-p"><span className="title">Order ID : </span><span className="info" >{selectedUserParcel.id}</span></p><br/>
              <p className="order-detail-p"><span className="title">Recipient : </span><span className="info" ></span>{selectedUserParcel.recipient}</p><br/><hr/>
              <p className="order-detail-p"><span className="title">Placed At : </span><span className="info" >{selectedUserParcel.fromaddress}</span></p>
              <p className="order-detail-p"><span className="title">Current Location : </span><span className="info" >{selectedUserParcel.currentlocation}</span></p><br/> 
              <p className="order-detail-p"><span className="title">Destination : </span><span className="info" ></span>{selectedUserParcel.toaddress}</p><br/> <hr/>
              <p className="order-detail-p"><span className="title">Item Weight : </span><span className="info" ></span>{selectedUserParcel.weight} kg</p><br/> 
              <p className="order-detail-p"><span className="title">Order Status :</span><span className="info" ></span>{selectedUserParcel.status}</p><br/>  <hr/>
              <p className="order-detail-p"><span className="title">Approximate Price : </span><span className="info"></span>{selectedUserParcel.weight * 100} Naira<br/></p>
              <div className="view-parcel-buttons-div">
              
              <Link to={`/edit/${selectedUserParcel.id}`}> 
                <button 
                  className="change-destination"
                >
                  Edit
                </button> 
              </Link>
              <Link to="/">
                <button 
                  className="cancel-order"
                  onClick= {this.handleCancelParcel}
                >
                  Cancel Order
                </button>
              </Link>
           </div>
          </form>
          </div>
        </Modal>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // userParcel: state.userParcel
})

export default connect(mapStateToProps, {cancelUserParcel})(ViewParcel)