import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import './header.css';

const Header = (props) => {
  return (
    <Container className="header" fluid>
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="home" id="navbar-brand">Invoice App</Navbar.Brand>
              <Navbar.Collapse>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="invoices">Invoices</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="products">Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="customers">Customers</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Container>
  )
};

export default Header;