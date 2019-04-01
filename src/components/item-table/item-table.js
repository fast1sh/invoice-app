import React from "react";
import { Table } from "react-bootstrap";
import './item-table.css';
import { ItemTableHeader, ItemTableBody } from "../item-table-components";

const customers = [
  {
    name: 'Mark Benson',
    adress: '353 Rochester St, Rialto FL 43260',
    number: '555-354-2342'
  },
  {
    name: 'Asiyah Hoover',
    adress: '353 Rochester St, Rialto FL 43260',
    number: '555-354-2342'
  },
  {
    name: 'Hayley Michael',
    adress: '353 Rochester St, Rialto FL 43260',
    number: '555-354-2342'
  }
];



const ItemTable = (props) => {
  console.log(props);
  const { items, labels } = props;

  return (
    <Table>
      <thead>
        { ItemTableHeader(labels) }
      </thead>
      <tbody>
        { ItemTableBody(items) }
      </tbody>
    </Table>
  )
};

export default ItemTable;