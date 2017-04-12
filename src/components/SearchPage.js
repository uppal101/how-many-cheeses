import React, {Component} from 'react';
import SideNav from './SideNav/SideNav';
import Button from './Common/Button';
import Table from './SearchTableResults/Table';

class SearchPage extends Component {
    render() {
        return (
          <div>
            <SideNav/>
            <Table/>
          </div>
        )
    }
}

export default SearchPage
