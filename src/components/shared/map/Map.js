import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11,
    key: process.env.MAP_KEY
  }
  
render() { 
  return (
    <div className="map-div">
      <GoogleMapReact
        bootstrapURLKeys={{ key: this.props.key }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
    </div>
  )
  }
}
