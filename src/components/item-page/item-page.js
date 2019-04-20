import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './item-page.css';

const ItemPage = (props) => {

  const { title, onAdd, children } = props;

  return (
    <Container>
      <Row className="mt-5 mb-4" noGutters>
        <Col className="d-flex" md="auto">
          <h2 className="page-title">{ title }</h2>
          <Button variant="outline-dark" onClick={onAdd}>Add</Button>
        </Col>
        <Col md="auto">
        </Col>
      </Row>
      <Row>
        <Col>
          { children }
        </Col>
      </Row>
    </Container>
  )
};

export default ItemPage;