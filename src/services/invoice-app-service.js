export default class InvoiceAppService {
  customers = [
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

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customers);
      }, 10);
    });
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