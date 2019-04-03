import React from "react";
import { InvoiceAppServiceConsumer } from "../../components/invoice-app-service-context";

const withInvoiceAppService = () => (Wrapped) => {
  return (props) => {
    return (
      <InvoiceAppServiceConsumer>
        {
          (invoiceAppService) => {
            return <Wrapped {...props} invoiceAppService={invoiceAppService}/>
          }
        }
      </InvoiceAppServiceConsumer>
    )
  }
};

export default withInvoiceAppService;