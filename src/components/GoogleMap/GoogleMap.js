import React, {Component} from 'react';
import {connect} from 'react-redux';
const API_KEY = 'AIzaSyA6_Q41cfo5GrTNCxzbKEIBg2lE7Gn-acw';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import mapQuery from '../../reducers/MapReducer'

const coords = {
 lat: 37.7749,
 lng: -122.4194
};

class Map extends Component{
    constructor(props){
        super(props);
        // console.log('______', this.props);
        this.generateMarkers = this.generateMarkers.bind(this);
    }


  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }
 generateMarkers() {
    console.log('-------------', this.props);
    const markers = this.props.data.map((marker, i) => {

     console.log('insde generateMarkers', i);
      return <Marker key={i} {...marker}/>
    })
}

  render() {
    console.log('state >>>>>>>>>>', this.props);
      return (
          <Gmaps
            width={'100%'}
            height={'300px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={13}
            loadingMessage={'Be happy'}
            params={{v: '3.exp', key: API_KEY}}
            onMapCreated={this.onMapCreated}>
            {/* {this.generateMarkers()} */}
          </Gmaps>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: mapQuery
  }
}

export default connect(mapStateToProps)(Map)
