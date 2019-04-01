import React from "react";

const ItemTableHeader = (fieldsArray) => {
  return (
    <tr>
      {
        fieldsArray.map((field, idx) => {
          return (
            <th className="thead-item" key={idx}>
              {field}
            </th>
          )
        })
      }
    </tr>
  )
};

export default ItemTableHeader;