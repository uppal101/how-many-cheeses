import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Thead from './Thead'
import Tbody from './Tbody'

class ResultsTable extends Component {
    render() {
        return (
            <Table responsive>
              <Thead/>
              <Tbody/>
            </Table>
        )
    }
}

export default ResultsTable
