import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignInPage from './components/Login/SignInPage'
import Search from './components/SearchPage'
import Store from './components/FindAStore'
import Favorites from './components/FavoritesPage'

class App extends Component {
    render() {
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
              </div>
              </Router>
        )
    }
}

export default App;
