import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css';

const Marker = () => {
  return <div className="super-awesome-pin"></div>
}

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 6.5244, lng: 3.3792 },
    zoom: 11,
    key: process.env.API_KEY
  }
  
render() { 
  return (
    <div className="map-div">
      <GoogleMapReact
        bootstrapURLKeys={{ key: this.props.key }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <Marker lat={6.5244} lng={3.3792} />
      </GoogleMapReact>
    </div>
  )
  }
}
