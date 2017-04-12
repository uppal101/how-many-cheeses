import React, {Component} from 'react';
import Table from './StoreTable/Table';
// import Map from './GoogleMap/GoogleMap'

class Store extends Component {
    render() {
        return (
          <div>
            <Table/>
            {/* <Map/> */}
          </div>
        )
    }
}

export default Store
