import React from "react";

const { Provider: InvoiceAppServiceProvider,
        Consumer: InvoiceAppServiceConsumer } = React.createContext();

export {
  InvoiceAppServiceProvider,
  InvoiceAppServiceConsumer
};