import React from "react";
import { InvoiceAppServiceConsumer } from "../../services/invoice-app-service";

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