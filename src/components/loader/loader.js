import React from "react";
import { Spinner, Row, Col, Container } from "react-bootstrap";
import './loader.css';

const Loader = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Spinner animation="border" variant="secondary" className="loader" />
        </Col>
      </Row>
    </Container>
  )
};

export default Loader;