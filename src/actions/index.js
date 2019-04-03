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

export {
  fetchCustomers
}