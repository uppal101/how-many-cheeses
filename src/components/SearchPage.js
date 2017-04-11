import React, {Component} from 'react';
import NavBar from './Common/Navigation/NavBar';
import SideNav from './SideNav/SideNav';
import SearchBar from './Common/SearchBar';
import Table from './SearchTableResults/Table';

class SearchPage extends Component {
    render() {
        return (
          <div>
            <NavBar/>
            <SideNav/>
            <SearchBar/>
            <Table/>
          </div>
        )
    }
}

export default SearchPage
