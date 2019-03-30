import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from "react-redux";
import store from "./store";
import { InvoiceAppServiceProvider } from "./components/invoice-app-service-context";
import InvoiceAppService from "./services/invoice-app-service";
import { BrowserRouter as Router } from "react-router-dom";

const invoiceAppService = new InvoiceAppService();

ReactDOM.render(
  <Provider store={store}>
    <InvoiceAppServiceProvider value={invoiceAppService}>
      <Router>
        <App />
      </Router>
    </InvoiceAppServiceProvider>
  </Provider>, document.getElementById('root'));
