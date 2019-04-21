import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import reducer from "./reducers";

const reducers = {
  customerPage: reducer,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;