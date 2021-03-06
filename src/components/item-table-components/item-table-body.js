import React from "react";
import { Button } from "react-bootstrap";

const ItemTableBody = (props) => {

  const { items, onEdit, onDeleted } = props;

  return items.map((item, idx) => {
    const itemKeys = Object.keys(item).slice(0);

    return (
      <tr key={idx}>
        <th>{idx + 1}</th>
        {
          itemKeys.map((key, keyIdx) => {
            return (
              <th key={keyIdx}>
                {item[key]}
              </th>
            )
          })
        }
        <th>
          <Button variant="outline-success" size="sm" className="mr-2" onClick={() => onEdit(idx)}>
            <i className="fas fa-pen"></i>
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDeleted(idx)}>
            <i className="fas fa-trash"></i>
          </Button>
        </th>
      </tr>
    )
  })
};

export default ItemTableBody;