import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Cocktails API</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            activeClassName="active-link"
            className="app-link"
          >
            Home
          </NavLink>
        </Nav>
        <Nav>
          <NavLink
            to="/aboutus"
            activeClassName="active-link"
            className="app-link"
          >
            About Us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
