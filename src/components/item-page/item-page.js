import React from "react";
import ItemTable from "../item-table";
import { Container, Row, Col, Button } from "react-bootstrap";
import './item-page.css';

const ItemPage = (props) => {
  return (
    <Container>
      <Row className="mt-5 mb-4" noGutters>
        <Col className="d-flex" md="auto">
          <h2 className="page-title">Customer List</h2>
          <Button variant="outline-dark">Create</Button>
        </Col>
        <Col md="auto">
        </Col>
      </Row>
      <Row>
        <Col>
          <ItemTable />
        </Col>
      </Row>
    </Container>
  )
};

export default ItemPage;