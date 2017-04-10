import React, { Component } from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
import SideNav from './components/SideNav/SideNav'
import NavBar from './components/Common/Navigation/NavBar'

class App extends Component {
  render() {
   const location = {
    lat: 0,
    lng: 0
   }
    return (
      <div >
        <NavBar/>
        <div style={{width:500, height:500, background:'red'}}>
          <Map center={location} />
          <SideNav/>
        </div>


      </div>
    );
  }
}

export default App;
