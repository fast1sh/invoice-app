import React from "react";
import { Table } from "react-bootstrap";
import './item-table.css';
import { ItemTableHeader, ItemTableBody } from "../item-table-components";

const ItemTable = (props) => {
  const { items, labels, onDeleted, onEdit } = props;

  return (
    <Table>
      <thead>
        { ItemTableHeader(labels) }
      </thead>
      <tbody>
        <ItemTableBody items={items} onEdit={onEdit} onDeleted={onDeleted} />
      </tbody>
    </Table>
  )
};

export default ItemTable;