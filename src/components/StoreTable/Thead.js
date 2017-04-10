import React, {Component} from 'react';
import {thead, tr, th} from 'react-bootstrap';

class Thead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Distance</th>
                    <th>Phone</th>
                </tr>
            </thead>
        )
    }
}

export default Thead
