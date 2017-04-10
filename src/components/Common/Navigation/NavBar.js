import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Nav, NavItem } from 'react-bootstrap';

class navBar extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">Home</NavItem>
          <NavItem eventKey="2" title="Item">Favorites</NavItem>
          <NavItem eventKey="3">Search</NavItem>
          <NavItem eventKey="3">About</NavItem>
        </Nav>
      </div>
    );
  }
};

export default navBar
