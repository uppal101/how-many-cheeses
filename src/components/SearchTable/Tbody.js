import React, {Component} from 'react';
import {tbody, tr, th } from 'react-bootstrap';
import Checkbox from './Checkbox';

class Tbody extends Component {
    render() {
        return (
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
        )
    }
}

export default Tbody
