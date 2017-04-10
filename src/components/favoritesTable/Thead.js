import React, {Component} from 'react';
import {thead, tr, th} from 'react-bootstrap';

class Thead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Firmness</th>
                    <th>Animal</th>
                    <th>Notes</th>
                </tr>
            </thead>
        )
    }
}

export default Thead
