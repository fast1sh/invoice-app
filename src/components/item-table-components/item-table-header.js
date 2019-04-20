import React from "react";

const ItemTableHeader = (props) => {

  const { labels } = props;

  return (
    <tr>
      {
        labels.map((field, idx) => {
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