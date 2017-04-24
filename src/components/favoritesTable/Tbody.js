import React, { Component } from "react";
import { tbody, tr, td } from "react-bootstrap";
import SeeNotesButton from "./SeeNotesButton";

class Tbody extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>Manchego</td>
          <td>Hard</td>
          <td>Cow</td>
          <td>
            <SeeNotesButton/>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Tbody;
