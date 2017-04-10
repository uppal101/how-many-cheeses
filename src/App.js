import React, {Component} from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
// import Places from './components/PlacesComponent/Places'
import SideNav from './components/SideNav/SideNav'
import NavBar from './components/Common/Navigation/NavBar'
import SearchButton from './components/Common/Button'
import SearchBar from './components/Common/SearchBar'
import TextArea from './components/TextArea/TextArea'
import Header from './components/Header'
// import Email from './components/Login/Email'
// import Password from './components/Login/Password'
import Login from './components/Login/LoginTitle'

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
        return (
            <div style={{
                width: 400,
                height: 400
            }}>
                <div>
                    <NavBar/>
                </div>
                <div style={{
                    width: 500,
                    height: 500
                }}>
                    <SideNav/>
                    <SearchBar/>
                    <Map center={location} markers={markers}/>
                    <SearchButton/>
                    <Header/>
                    <TextArea/>
                    <Login/>
                    {/* <Email/> */}
                    {/* <Password/> */}
                </div>
            </div>
        );
    }
}

export default App;
