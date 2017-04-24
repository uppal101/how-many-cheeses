import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Tbody from "./Tbody";

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
        <Tbody/>
      </Table>
    );
  }
}

export default FavoritesTable;
