import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';

function Navigation() {
  const nav = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={(e) => {e.preventDefault;nav('/')}}>React APOD</Navbar.Brand> {/* Use onClick for navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => {e.preventDefault;nav('/')}}>Home</Nav.Link>
            <Nav.Link onClick={(e) => {e.preventDefault;nav('/bydate')}}>By Date</Nav.Link>
            <Nav.Link onClick={(e) => {e.preventDefault;nav('/bycountdate')}}>By Count / Between dates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;