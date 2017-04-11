import React, {Component} from 'react';
import NavBar from './Common/Navigation/NavBar';
import Table from './StoreTable/Table';
// import Map from './GoogleMap/GoogleMap'

class Store extends Component {
    render() {
        return (
          <div>
            <NavBar/>
            <Table/>
            {/* <Map/> */}
          </div>
        )
    }
}

export default Store
