export default class InvoiceAppService {
  customers = [
    {
      id: Symbol(),
      name: 'Mark Benson',
      adress: '353 Rochester St, Rialto FL 43260',
      number: '555-354-2342' 
    },
    {
      id: Symbol(),
      name: 'Asiyah Hoover',
      adress: '353 Rochester St, Rialto FL 43260',
      number: '555-354-2342'
    },
    {
      id: Symbol(),
      name: 'Hayley Michael',
      adress: '353 Rochester St, Rialto FL 43260',
      number: '555-354-2342'
    }
  ];

  getCustomers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customers);
      }, 700);
    });
  };

  addCustomer = ({ name, adress, number }) => {
    this.customers = [
      ...this.customers,
      { name, adress, number }
    ];
  };

  deleteCustomer = (idx) => {
    this.customers = [
      ...this.customers.slice(0, idx),
      ...this.customers.slice(idx + 1)
    ];
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customers);
      }, 10);
    });
  };

};