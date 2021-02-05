import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../css/NavBarStyleSheet.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link to="/" className="navLinks">
            Home
          </Link>
          <Link to="paymentpage" className="navLinks">
            Payment 
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
