import React, {Component} from 'react';
import {tbody, tr, td } from 'react-bootstrap';

class Tbody extends Component {
    render() {
        return (
          <tbody>
              <tr>
                  <td>Cheese Plus</td>
                  <td>2001 Polk St</td>
                  <td>2 Miles</td>
                  <td>888-888-8888</td>
              </tr>
          </tbody>
        )
    }
}

export default Tbody
