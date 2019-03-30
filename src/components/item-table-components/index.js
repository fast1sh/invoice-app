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

export {
  ItemTableHeader,
  ItemTableBody
};