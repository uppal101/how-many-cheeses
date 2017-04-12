import React, {Component} from 'react';
import {connect} from 'react-redux';
const API_KEY = 'AIzaSyA6_Q41cfo5GrTNCxzbKEIBg2lE7Gn-acw';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

class Map extends Component{
    constructor(props){
        super(props);
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
    console.log(this.props);
    const markers = this.props.markers.map((venue, i) => {
      // return <Marker key={i} {...marker}/>
    })
}

  render() {
    console.log(this.props.data);
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
            {/* <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />

            <Marker
              lat={store1.latitude}
              lng={store1.longitude}
              draggable={true}
              onDragEnd={this.onDragEnd} />

              <Marker
                lat={store2.latitude}
                lng={store2.longitude}
                draggable={true}
                onDragEnd={this.onDragEnd} />

                <Marker
                  lat={store3.latitude}
                  lng={store3.longitude}
                  draggable={true}
                  onDragEnd={this.onDragEnd} /> */}

          </Gmaps>
      )
  }
}
// function mapStateToProps(state){
//     return {data: state.data}
// }
export default Map;
