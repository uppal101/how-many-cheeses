import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Checkbox from "./Checkbox";


// you could combine some of these components into one. Especially since they don't need stae.
class ResultsTable extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Firmness</th>
            <th>Animal</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manchego</td>
            <td>Hard</td>
            <td>Cow</td>
            <td>
              <Checkbox/>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ResultsTable;
