import React from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";

const customerTableLabels = ['#', 'Name', 'Adress', 'Number'];

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

const CustomerPage = (props) => {
  return (
    <ItemPage title="Customer List">
      <ItemTable labels={customerTableLabels} items={customers} />
    </ItemPage>
  )
};

export default CustomerPage;