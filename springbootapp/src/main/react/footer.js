import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-4 py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="https://github.com/SwatiKasina/FrontenedReactAPOD" target="_blank">Source Code</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://api.nasa.gov/" target="_blank">NASA Open API</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
