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
          <NavItem eventKey={1} href='/Sign-in'>Sign-in</NavItem>
          <NavItem eventKey={2} href="/Favorites">Favorites</NavItem>
          <NavItem eventKey={2} href="/Search">Search</NavItem>
          <NavItem eventKey={2} href="/FindAStore">Find A Store</NavItem>
        </Nav>
      </Navbar>
    </div>
  )

  }
};

export default navBar
