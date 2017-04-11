import React, {Component} from 'react';
import './App.css';
import { BrowerRouter as Router, Route, link } from 'react-router-dom'
import SignInPage from './components/Login/SignInPage'
// import Map from './components/GoogleMap/GoogleMap'
// import Places from './components/PlacesComponent/Places'
// import SideNav from './components/SideNav/SideNav'
// import NavBar from './components/Common/Navigation/NavBar'
// import SearchButton from './components/Common/Button'
// import SearchBar from './components/Common/SearchBar'
// import TextArea from './components/TextArea/TextArea'
// import Header from './components/Header'
// import LoginTitle from './components/Login/LoginTitle'
// import SignIn from './components/Login/SignIn'
// import FavoritesTable from './components/favoritesTable/Table'
// import ResultsTable from './components/SearchTableResults/Table'
// import StoreTable from './components/StoreTable/Table'

class App extends Component {
    render() {
        // const location = {
        //     lat: 37.7749,
        //     lng: -122.4194
        // }
        // const markers = [
        //     {
        //         location: {
        //             lat: 37.7749,
        //             lng: -122.4194
        //         }
        //     }
        // ]
        return (
            <Router>
                <div>
                  <ul>
                    <li><link to= '/Sign-in'>Sign-in</link></li>
                    <li><link to= '/Search'>Search</link></li>
                    <li><link to= '/FindAStore'>Find A Store</link></li>
                    <li><link to= '/Favorites'>Favorites</link></li>
                  </ul>

                  <Route path='/Sign-in' component={SignInPage}/>
                  {/* <Route path='/Search' component={Search}/>
                  <Route path='/FindAStore' component={Store}/>
                  <Route path='/Favorites' component={Favorites}/> */}
                    {/* <NavBar/>
                </div>
                <div>
                    <SideNav/>
                    <SearchBar/>
                    <ResultsTable/>
                    <StoreTable/>
                    {/* <Map center={location} markers={markers}/> */}
                    {/* <SearchButton/>
                    <Header/>
                    <FavoritesTable/>
                    <TextArea/>
                    <LoginTitle/>
                    <SignIn/> */}
                    {/* <Email/> */}
                    {/* <Password/> */}
                </div>
            </Router>
        );
    }
}

export default App;
