const initialState = {
  customers: [],
  showAddModal: false,
  showEditModal: false,
  editingCustomerIdx: null,
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_REQUEST':
      return {
        ...state
      };
    case 'FETCH_CUSTOMERS_SUCCESS':
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    case 'FETCH_CUSTOMERS_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    case 'CUSTOMER_DELETED':
      return {
        ...state,
        customers: action.payload
      };
    case 'CUSTOMER_ADDED':
      return {
        ...state,
        showAddModal: false,
        customers: action.payload
      }
    case 'CUSTOMER_EDITED':
      return {
        ...state,
        showEditModal: false,
        customers: action.payload
      }
    case 'SHOW_ADD_CUSTOMER_MODAL':
      return {
        ...state,
        showAddModal: true
      };
    case 'CLOSE_ADD_CUSTOMER_MODAL':
      return {
        ...state,
        showAddModal: false
      };
    case 'SHOW_EDIT_CUSTOMER_MODAL':
      return {
        ...state,
        showEditModal: true,
        editingCustomerIdx: action.payload
      };
    case 'CLOSE_EDIT_CUSTOMER_MODAL':
      return {
        ...state,
        showEditModal: false,
        editingCustomerIdx: null
      }
    default:
      return state;
  }
};

export default reducer;