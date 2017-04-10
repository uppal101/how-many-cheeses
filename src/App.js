import React, { Component } from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'

// import SideNavSubCategories from './components/SideNav/SideNavSubCategories'
// import SideNav from './components/SideNav/SideNav'

import SideNav from './components/SideNav/SideNav'
import NavBar from './components/Common/Navigation/NavBar'


class App extends Component {
  render() {
   const location = {
    lat: 37.7749,
    lng: -122.4194
   }
   const markers = [
    {
     location: {
      lat: 37.7749,
      lng: -122.4194
     }
    }
   ]

   return(
     <div style={{width:400, height:400, background:'red'}}>
      <div>
       <NavBar/>
      </div>
      <div style={{width:500, height:500, background:'red'}}>
       <SideNav/>
       <Map center={location} markers={markers} />
      </div>
     </div>
    );
  }
}

export default App;
