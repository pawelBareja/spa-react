import React, { Component } from "react";
import logo from "../img/logo.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="80" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home">Poznaj Nas</Nav.Link>
            <Nav.Link href="#link">Jak pracujemy?</Nav.Link>
            <Nav.Link href="#home">Etapy działania</Nav.Link>
            <Nav.Link href="#link">Usługi</Nav.Link>
            <Nav.Link href="#home">Nasi klienci</Nav.Link>
            <Nav.Link href="#link">Case study</Nav.Link>
            <Nav.Link href="#home">Kontakt</Nav.Link>
            <Nav.Link href="#link">Napisz do nas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
