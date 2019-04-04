const customersRequested = () => {
  return {
    type: 'FETCH_CUSTOMERS_REQUEST'
  }
};

const customersLoaded = (newCustomers) => {
  return {
    type: 'FETCH_CUSTOMERS_SUCCESS',
    payload: newCustomers
  }
};

const customersError = (error) => {
  return {
    type: 'FETCH_CUSTOMERS_FAILURE',
    payload: error
  }
};

const fetchCustomers = (invoiceAppService, dispatch) => () => {
  dispatch(customersRequested());

  invoiceAppService.getCustomers()
    .then((customers) => dispatch(customersLoaded(customers)))
    .catch((err) => dispatch(customersError(err)));
};

const addCustomer = (customer) => {
  return 1;
};

const customerDeleted = (newCustomers) => {
  return {
    type: 'CUSTOMER_DELETED',
    payload: newCustomers
  }
};

const onCustomerDeleted = (invoiceAppService, dispatch) => (idx) => {

  invoiceAppService.deleteCustomer(idx)
    .then((customers) => dispatch(customerDeleted(customers)))
    .catch((err) => dispatch(customersError(err)));
}

export {
  fetchCustomers,
  onCustomerDeleted
}