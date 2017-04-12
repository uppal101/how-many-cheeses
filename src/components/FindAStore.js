import React, {Component} from 'react';
import NavBar from './Common/Navigation/NavBar';
import Table from './StoreTable/Table';
import Map from './GoogleMap/GoogleMap'
import FindStoreInputForm from './FindStoreInputForm/FindStoreInputForm'

class Store extends Component {
    render() {


         {/* <div>
          const location = {
              lat: 37.7749,
              lng: -122.4194
          }
          const markers = [
              {
                  location: {
                      lat: 37.7749,
                      lng: -122.4194
                  }
              }
          ]
          return (
         </div> */}
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
