import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MapButton from './components/Common/MapSearchStore'
import FindStoreInputForm from './components/FindStoreInputForm/FindStoreInputForm'
import SignInPage from './components/Login/SignInPage'
import Search from './components/SearchPage'
import Store from './components/FindAStore'
import Favorites from './components/FavoritesPage'
import Navbar from './components/Common/Navigation/NavBar'


class App extends Component {
    render() {
        return (
             <Router>
                <div>
                  <Navbar/>
                  <Route path='/Sign-in' component={SignInPage}/>
                  <Route path='/Search' component={Search}/>
                  <Route path='/FindAStore' component={Store}/>
                  <Route path='/Favorites' component={Favorites}/>
                </div>
              </Router>
        )
    }
}

export default App;
