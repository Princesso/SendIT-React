import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import MapContainer from '../../shared/map/Map'
import styled from 'styled-components'
import './editpage.css'
import { connect } from 'react-redux'
import { changeUserParcelDestination } from '../../../actions/userActions'

class EditPage extends React.Component {
  state = { 
    toAddress: ''
  }
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const parcelId = this.props.match.params.id
    const newDestination = this.state
    this.props.changeUserParcelDestination(parcelId, newDestination);
    console.log(this.props)
    this.props.history.push('/dashboard')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getParcelDetail = () => {
    const id = Number(this.props.match.params.id)
    console.log(this.state, 'state of parcel')
    const userData = this.props.userParcels.find(item => item.id === id )
    return userData
  }

  render() {
    const { toAddress } = this.state
    return(
      <div>
        <Header/>
        <div className="edit-page-main-container">
          <div classname="edit-form-container">
            <div className="edit-parcel-form">
            <form 
              className="form" 
              method="post" 
              onSubmit={this.handleSubmit}
            > 
              <h3>Change Order Destination</h3>
              <input 
                type="text" 
                placeholder="Recipient's Address" 
                autoComplete="address-level2" 
                id="to-address"
                name="toAddress"
                onChange={this.handleChange}
                value={toAddress}
              />
              <p id="created"></p>
              <div className="send-parcel-button-div"><button type="submit" className="send-parcel" id="send-parcel-button">Save</button></div>
              </form>
            </div>
          </div>
          <div className="edit-map-container"> <MapContainer/> </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  userParcels: state.userParcels || []
})

export default connect(mapStateToProps, {changeUserParcelDestination}) (withRouter(EditPage))


