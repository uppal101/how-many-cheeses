import React, { Component } from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
// import SideNavSubCategories from './components/SideNav/SideNavSubCategories'
import SideNav from './components/SideNav/SideNav'

class App extends Component {
  render() {
   const location = {
    lat: 0,
    lng: 0
   }
    return (
      <div >
        <div style={{width:500, height:500, background:'red'}}>
          <Map center={location} />
          <SideNav/>
        </div>


      </div>
    );
  }
}

export default App;
