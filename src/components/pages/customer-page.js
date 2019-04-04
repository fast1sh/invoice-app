import React, { Component } from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";
import { connect } from "react-redux";
import withInvoiceAppService from "../hoc/with-invoice-app-service";
import { fetchCustomers, onCustomerDeleted } from "../../actions/index";
import Loader from "../loader";

const customerTableLabels = ['#', 'Name', 'Adress', 'Number'];

/* 
const CustomerPage = (props) => {
  return (
    <ItemPage title="Customer List">
      <ItemTable labels={customerTableLabels} items={props.customers} />
    </ItemPage>
  )
};
*/

class CustomerPageContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    const { customers, loading, onCustomerDeleted } = this.props;

    if (loading) {
      return <Loader />
    }

    return (
      <ItemPage title="Customer List">
        <ItemTable labels={customerTableLabels} items={customers} onDeleted={onCustomerDeleted} />
      </ItemPage>
    )
  }
}

const mapStateToProps = ({ customers, loading, error }) => {
  return { customers, loading, error };
};

const mapDispatchToProps = (dispatch, { invoiceAppService }) => {
  return {
    fetchCustomers: fetchCustomers(invoiceAppService, dispatch),
    addCustomer: invoiceAppService.addCustomer,
    onCustomerDeleted: onCustomerDeleted(invoiceAppService, dispatch)
  }

};

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(CustomerPageContainer));