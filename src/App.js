import React, { Component } from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
// import SideNavSubCategories from './components/SideNav/SideNavSubCategories'
// import SideNav from './components/SideNav/SideNav'

class App extends Component {
  render() {
   const location = {
    lat: 37.774,
    lng: -122.431297
   }
    return (
      <div > <h1>This is a react app</h1>
        <div style={{width:500, height:500, background:'red'}}>
          <Map center={location} />
        </div>

         <Places/>
      </div>
    );
  }
}

export default App;
