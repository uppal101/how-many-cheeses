import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Thead from './Thead'
import Tbody from './Tbody'

class StoreTable extends Component {
    render() {
        return (
            <Table responsive>
              <Thead/>
              <Tbody/>
            </Table>
        )
    }
}

export default StoreTable
