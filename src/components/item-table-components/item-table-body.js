import React from "react";

const ItemTableBody = (itemsArray) => {
  return itemsArray.map((item, idx) => {
    const itemKeys = Object.keys(item);

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
      </tr>
    )
  })
};

export default ItemTableBody;