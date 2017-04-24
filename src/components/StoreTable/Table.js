import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Tbody from "./Tbody";

class StoreTable extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Distance</th>
            <th>Phone</th>
          </tr>
        </thead>
        <Tbody/>
      </Table>
    );
  }
}

export default StoreTable;
