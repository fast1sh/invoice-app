import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import './item-table.css';
import { ItemTableHeader, ItemTableBody } from "../item-table-components";

const ItemTable = (props) => {
  const { items, labels, onDeleted, onEdit } = props;

  return (
    <div className="table-wrap">
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                {ItemTableHeader(labels)}
              </thead>
              <tbody>
                <ItemTableBody items={items} onEdit={onEdit} onDeleted={onDeleted} />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default ItemTable;