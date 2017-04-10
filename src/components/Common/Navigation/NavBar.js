import React, {Component} from "react";
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class navBar extends Component {
  render() {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Too-Cheesy</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Favorites</NavItem>
          <NavItem eventKey={2} href="#">Search</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
        </Nav>
      </Navbar>
    </div>
  )

  }
};

export default navBar
