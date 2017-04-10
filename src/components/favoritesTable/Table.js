import React, {Component} from 'react';
import {
    Table,
    thead,
    tr,
    th,
    td,
    tbody,
    Button,
    ButtonToolbar
} from 'react-bootstrap';

class FavoritesTable extends Component {
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Firmness</th>
                        <th>Animal</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Manchego</td>
                        <td>Hard</td>
                        <td>Cow</td>
                        <td>
                            <ButtonToolbar>
                                <Button>See Notes</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default FavoritesTable
