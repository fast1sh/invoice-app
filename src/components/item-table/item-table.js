import React from "react";
import { Table } from "react-bootstrap";
import './item-table.css';

const ItemTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="thead-item">#</th>
          <th className="thead-item">Name</th>
          <th className="thead-item">Adress</th>
          <th className="thead-item">Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Mark Benson</th>
          <th>353 Rochester St, Rialto FL 43260</th>
          <th>555-354-2342</th>
        </tr>
        <tr>
          <th>1</th>
          <th>Mark Benson</th>
          <th>353 Rochester St, Rialto FL 43260</th>
          <th>555-354-2342</th>
        </tr>
        <tr>
          <th>1</th>
          <th>Mark Benson</th>
          <th>353 Rochester St, Rialto FL 43260</th>
          <th>555-354-2342</th>
        </tr>
        <tr>
          <th>1</th>
          <th>Mark Benson</th>
          <th>353 Rochester St, Rialto FL 43260</th>
          <th>555-354-2342</th>
        </tr>
      </tbody>
    </Table>
  )
};

export default ItemTable;