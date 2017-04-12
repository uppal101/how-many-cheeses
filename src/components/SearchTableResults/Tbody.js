import React, {Component} from 'react';
import {tbody, tr, td } from 'react-bootstrap';
import Checkbox from './Checkbox';

const mapStateToProps = (state, ownProps) => {
 return {
  value: state.firmness.result
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({firmnessQuery, setCheeseResult}, dispatch)
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Tbody)
