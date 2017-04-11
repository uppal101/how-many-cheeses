import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignInPage from './components/Login/SignInPage'
import Search from './components/SearchPage'
import Store from './components/FindAStore'
import Favorites from './components/FavoritesPage'
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'

class App extends Component {
    render() {
        //  const location = {
        //      lat: 37.7749,
        //      lng: -122.4194
        //  }
        //  const markers = [
        //      {
        //          location: {
        //              lat: 37.7749,
        //              lng: -122.4194
        //          }
        //      }
        //  ]
        return (

             <Router>
              <div>
                <div>
                  <ul>
                    <li><Link to='/Sign-in'>Sign-in</Link></li>
                    <li><Link to='/Search'>Search</Link></li>
                    <li><Link to='/FindAStore'>Find A Store</Link></li>
                    <li><Link to='/Favorites'>Favorites</Link></li>
                  </ul>

                  <Route path='/Sign-in' component={SignInPage}/>
                  <Route path='/Search' component={Search}/>
                  <Route path='/FindAStore' component={Store}/>
                  <Route path='/Favorites' component={Favorites}/>
                </div>
                <div>/
                     {/* <Map center={location} markers={markers}/> */}
                </div>
              </div>
              </Router>
        )
    }
}

export default App;
