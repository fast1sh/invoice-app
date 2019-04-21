import React from "react";
import { Container, Row, Col, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import './header.css';

const Header = (props) => {
  return (
    <Container className="header" fluid>
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="/" id="navbar-brand">Invoice App</Navbar.Brand>
              <Navbar.Collapse>
                <Nav>
                  <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">In progress</Tooltip>}>
                        <div>
                        <Nav.Link href="#" disabled>Invoices</Nav.Link>
                        </div>
                    </OverlayTrigger>
                  </Nav.Item>
                  <Nav.Item>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">In progress</Tooltip>}>
                      <div>
                        <Nav.Link href="#" disabled>Products</Nav.Link>
                      </div>
                    </OverlayTrigger>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/">Customers</Nav.Link>
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