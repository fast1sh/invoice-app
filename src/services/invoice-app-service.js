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

  products = [
    {
      name: 'Phone Holder',
      price: 9.99
    },
    {
      name: 'Parachute Pants',
      price: 29.99
    },
    {
      name: 'Pet Rock',
      price: 5.99
    },
    {
      name: 'Egg Timer',
      price: 15.99
    },
    {
      name: 'Neon Green Hat',
      price: 21.99
    }
  ]

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

  editCustomer = (idx, { name, adress, number }) => {
    console.log('!!!', idx);
    this.customers = [
      ...this.customers.slice(0, idx),
      { name, adress, number },
      ...this.customers.slice(idx + 1)
    ];
    console.log('???', this.customers);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customers);
      }, 10);
    });
  }

  getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 700);
    });
  };

  addProduct = ({ name, price }) => {
    this.products = [
      ...this.products,
      { name, price }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 10);
    });
  };

  deleteProduct = (idx) => {
    this.products = [
      ...this.products.slice(0, idx),
      ...this.products.slice(idx + 1)
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 10);
    });
  };

  editProduct = (idx, { name, price }) => {
    this.products = [
      ...this.products.slice(0, idx),
      { name, price },
      ...this.products.slice(idx + 1)
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 10);
    });
  }

};