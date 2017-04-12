import React, {Component} from 'react';
import Table from './StoreTable/Table';
import Map from './GoogleMap/GoogleMap'
import FindStoreInputForm from './FindStoreInputForm/FindStoreInputForm'

class Store extends Component {
    render() {

         return (
           <div>
            <Table/>
            <FindStoreInputForm/>
            <Map/>
           </div>
         )

    }
}

export default Store
