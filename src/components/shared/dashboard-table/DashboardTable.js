import React from 'react'
import ViewParcel from '../modal/ViewParcel'
import NewParcel from '../modal/NewParcel'
import ChangeDestination from '../modal/ChangeDestination'
import {getUserParcels} from '../../../actions/userActions'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCheck, faClock, faBan } from "@fortawesome/free-solid-svg-icons";
import './dashboardtable.css'

export class DashboardTable extends React.Component {
	constructor() {
    super()
    this.state = { viewParcel: false, createNew: false, selectedParcel: {}}
    this.toggleCreateNew = this.toggleCreateNew.bind(this)
		this.toggleViewParcel = this.toggleViewParcel.bind(this)
		
	}

  toggleCreateNew() {
    this.setState({createNew: !this.state.createNew})
	}

	setSelectedParcel(id) {
		this.setState({selectedParcel: this.props.userParcels.find(item => item.id === id )})
	}

	toggleViewParcel() {
    this.setState({viewParcel: !this.state.viewParcel})
	} 
	
	componentDidMount() { 
		this.props.getUserParcels()
		.then(()=>{
				toast.success('You have not created any parcles yet')
		})
		.catch((error)=> {
			toast.error('An error occurred when trying to get your parcels')
		})
	}

  render() {
		const parcels = this.props.userParcels;
		const total = this.props.userParcels.length;
		const canceledParcels = this.props.userParcels.filter(parcel => parcel.status == 'canceled').length
		const pendingParcels = this.props.userParcels.filter(parcel => parcel.status == 'pending').length
		const deliveredParcels = this.props.userParcels.filter(parcel => parcel.status == 'delivered').length
		const listOfParcels = parcels.map((userParcel, index) => {
			return(
					<tr key={index}>
						<td>{userParcel.id}</td>
						<td>{userParcel.senton.slice(0,10)}</td>
						<td>{userParcel.itemname}</td>
						<td>{userParcel.currentlocation}</td>
						<td>{userParcel.toaddress}</td>
						<td>{userParcel.recipient}</td>
						<td>{userParcel.status}</td>
						<td>
							<button
								onClick={() => {
									this.toggleViewParcel(),
									this.setSelectedParcel(userParcel.id)
								}}
							>
								View
							</button></td>
					</tr>
			)
		})

		return(
			<div>
				<NewParcel toggleModalView={this.toggleCreateNew} visible={this.state.createNew} />
				<ViewParcel toggleModalView={this.toggleViewParcel} visible={this.state.viewParcel} selectedUserParcel={this.state.selectedParcel}/>
				<div className="dashcontainer">
					<div className="welcome">
						<h5>Welcome <span id="username"></span></h5>
						
						<button id="new-delivery" onClick={() => this.toggleCreateNew()}>New Delivery Order</button>
					</div>
					<div className="cards">
						<div className="card">
							<div id="delivery-truck">
									<span className="fas fa-truck"><FontAwesomeIcon icon={faTruck} /></span>
							</div>
							<div>
									<h6>Orders</h6>
									<p id="total-orders">{total }</p>
							</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-check"><FontAwesomeIcon icon={faCheck} /></span>
								</div>
								<div>
										<h6>Delivered</h6>
										<p id="total-delivered">{deliveredParcels}</p>
								</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-clock"><FontAwesomeIcon icon={faClock} /></span>
								</div>
								<div>
										<h6>Pending</h6>
										<p id="total-pending">{pendingParcels}</p>
								</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-ban"><FontAwesomeIcon icon={faBan} /></span>
								</div>
								<div>
										<h6>Canceled</h6>
										<p id="total-canceled">{canceledParcels}</p>
								</div>
						</div>
					</div>
					<div id="all">
							All Orders
							<p id="dashboard-error"></p>
					</div>
					<div className="table-container">
						<table className="table" id="dashboard-table">
							<thead>
								<tr>
										<th data-name="id">ID</th>
										<th data-name="id">SENT-ON</th>
										<th data-name="itemname">ITEM NAME</th>
										<th data-name="currentlocation">CURRENT LOCATION</th>
										<th data-name="toaddress">DESTINATION</th>
										<th data-name="recipient">RECIPIENT</th>
										<th data-name="status">STATUS</th>
										<th data-name="action">ACTION</th>
									</tr>
							</thead>
							<tbody>
								{ listOfParcels }
							</tbody>	
						</table>
					</div>
				</div>
			</div>
		)
	}
  
}

const mapStateToProps = state => ({
  userParcels: state.userParcels || []
})

export default connect(mapStateToProps, {getUserParcels}) (withRouter(DashboardTable))