import React from 'react'
import './dashboardtable.css'
import ViewParcel from '../modal/ViewParcel'
import NewParcel from '../modal/NewParcel'
import ChangeDestination from '../modal/ChangeDestination'

class DashboardTable extends React.Component {
	constructor() {
    super()
    this.state = { viewParcel: false }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView() {
    this.setState({viewParcel: !this.state.viewParcel})
  } 

  render() {
		return(
			<div>
				<NewParcel toggleView={this.toggleView} viewParcel={this.state.viewParcel} />

				<div className="dashcontainer">
					<div className="welcome">
						<h5>Welcome <span id="username"></span></h5>
						<ChangeDestination toggleView={this.toggleView} viewParcel={this.state.viewParcel}/>
						<button id="new-delivery" onClick={() => this.toggleView()}>New Delivery Order</button>
					</div>
					<div className="cards">
						<div className="card">
							<div id="delivery-truck">
									<span className="fas fa-truck"></span>
							</div>
							<div>
									<h6>Orders</h6>
									<p id="total-orders"></p>
							</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-check"></span>
								</div>
								<div>
										<h6>Delivered</h6>
										<p id="total-delivered"></p>
								</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-clock"></span>
								</div>
								<div>
										<h6>Pending</h6>
										<p id="total-pending"></p>
								</div>
						</div>
						<div className="card">
								<div id="delivery-truck">
										<span className="fas fa-ban"></span>
								</div>
								<div>
										<h6>Canceled</h6>
										<p id="total-canceled"></p>
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
										<th data-name="itemname">ITEM NAME</th>
										<th data-name="currentlocation">CURRENT LOCATION</th>
										<th data-name="toaddress">DESTINATION</th>
										<th data-name="recipient">RECIPIENT</th>
										<th data-name="status">STATUS</th>
										<th data-name="action">ACTION</th>
									</tr>
							</thead>
			
							{/* <tbody>
								<!-- <tr>
										<td>1</td>
										<td>Dress</td>
										<td>Alaba</td>
										<td>Ikeja</td>
										<td>pending</td>
										<td><a href="./order-detail.html"><button>View</button></a></td>
									</tr>
									<tr>
										<td>1</td>
										<td>Clothes</td>
										<td>Alaba</td>
										<td>Onitsha</td>
										<td>Delivered</td>
										<td><a href="./order-detail.html"><button>View</button></a></td>
									</tr>
									<tr>
										<td>1</td>
										<td>Bags</td>
										<td>Ojo</td>
										<td>Obanikoro</td>
										<td>pending</td>
										<td><a href="./order-detail.html"><button>View</button></a></td>
									</tr>  -->
							</tbody> */}
						</table>
					</div>
				</div>
			</div>
		)
	}
  
}

export default DashboardTable