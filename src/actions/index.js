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

const customerAdded = (newCustomers) => {
  return {
    type: 'CUSTOMER_ADDED',
    payload: newCustomers
  }
};

const onCustomerAdded = (invoiceAppService, dispatch) => (customer) => {
  console.log('CUSTOMER', customer);

  invoiceAppService.addCustomer(customer)
    .then((customers) => dispatch(customerAdded(customers)))
    .catch((err) => dispatch(customersError(err)));
}

const customerEdited = (newCustomers) => {
  return {
    type: 'CUSTOMER_EDITED',
    payload: newCustomers
  }
};

const onCustomerEdited = (invoiceAppService, dispatch) => (idx, newCustomer) => {
  
  invoiceAppService.editCustomer(idx, newCustomer)
    .then((customers) => dispatch(customerEdited(customers)))
    .catch((err) => dispatch(customersError(err)));
}

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
};

const onShowAddModal = () => {
  return {
    type: 'SHOW_ADD_CUSTOMER_MODAL'
  }
};

const onCloseAddModal = () => {
  return {
    type: 'CLOSE_ADD_CUSTOMER_MODAL'
  }
};

const onShowEditModal = (idx) => {
  return {
    type: 'SHOW_EDIT_CUSTOMER_MODAL',
    payload: idx
  }
};

const onCloseEditModal = () => {
  return {
    type: 'CLOSE_EDIT_CUSTOMER_MODAL'
  }
};



export {
  fetchCustomers,
  onCustomerAdded,
  onCustomerDeleted,
  onCustomerEdited,
  onShowAddModal,
  onCloseAddModal,
  onShowEditModal,
  onCloseEditModal
}