import React from "react";
import { Table } from "react-bootstrap";
import './item-table.css';
import { ItemTableHeader, ItemTableBody } from "../item-table-components";

const ItemTable = (props) => {
  const { items, labels, onEdited, onDeleted } = props;

  console.log('itemtable', onDeleted);

  return (
    <Table>
      <thead>
        { ItemTableHeader(labels) }
      </thead>
      <tbody>
        <ItemTableBody items={items} onEdited={onEdited} onDeleted={onDeleted} />
      </tbody>
    </Table>
  )
};

export default ItemTable;