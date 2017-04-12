import React, {Component} from 'react';
import NavBar from './Common/Navigation/NavBar';
import Table from './StoreTable/Table';
import Map from './GoogleMap/GoogleMap'
import FindStoreInputForm from './FindStoreInputForm/FindStoreInputForm'

class Store extends Component {
    render() {
         return (
           <div>
            <NavBar/>
            <Table/>
            <FindStoreInputForm/>
            <Map/>
           </div>
         )

    }
}

export default Store
