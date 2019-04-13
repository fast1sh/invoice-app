const initialState = {
  customers: [],
  showAddModal: false,
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
    case 'SHOW_ADD_MODAL':
      return {
        ...state,
        showAddModal: true
      };
    case 'CLOSE_ADD_MODAL':
      return {
        ...state,
        showAddModal: false
      };
    default:
      return state;
  }
};

export default reducer;