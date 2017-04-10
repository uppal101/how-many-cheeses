import React, { Component } from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
// import SideNavSubCategories from './components/SideNav/SideNavSubCategories'
// import SideNav from './components/SideNav/SideNav'

class App extends Component {
  render() {
   const location = {
    lat: 40.7575285,
    lng: -73.9884469
   }
    return (
      <div > <h1>This is a react app</h1>
        <div style={{width:700, height:700, background:'red'}}>
          <Map center={location} />
        </div>

         <Places/>
      </div>
    );
  }
}

export default App;
