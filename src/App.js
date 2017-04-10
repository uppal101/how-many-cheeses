import React, {Component} from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
import SideNav from './components/SideNav/SideNav'
import NavBar from './components/Common/Navigation/NavBar'
import SearchButton from './components/Common/Button'
import SearchBar from './components/Common/SearchBar'

class App extends Component {
    render() {
        const location = {
            lat: 40.7575285,
            lng: -73.9884469
        }
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div style={{
                    width: 500,
                    height: 500,
                    background: 'red'
                }}>
                    <SideNav/>
                    <SearchBar/>
                    <Map center={location}/>
                    <SearchButton/>
                </div>
            </div>
        );
    }
}

export default App;
