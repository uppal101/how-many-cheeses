import React, {Component} from 'react';
import NavBar from './Common/Navigation/NavBar';
import Header from './Header'
import Table from './favoritesTable/Table';
import TextArea from './TextArea/TextArea';

class Favorites extends Component {
    render() {
        return (
          <div>
            <NavBar/>
            <Header/>
            <Table/>
            <TextArea/>
          </div>
        )
    }
}

export default Favorites
