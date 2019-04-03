const initialState = {
  customers: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_REQUEST':
      return {
        customers: [],
        loading: true,
        error: null
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
    default:
      return state;
  }
};

export default reducer;