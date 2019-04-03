import React, { Component } from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";
import { connect } from "react-redux";
import withInvoiceAppService from "../hoc/with-invoice-app-service";
import { fetchCustomers } from "../../actions/index";

const customerTableLabels = ['#', 'Name', 'Adress', 'Number'];

const CustomerPage = (props) => {
  return (
    <ItemPage title="Customer List">
      <ItemTable labels={customerTableLabels} items={props.customers} />
    </ItemPage>
  )
};

class CustomerPageContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    const { customers } = this.props;

    return (
      <CustomerPage customers={customers}/>
    )
  }
}

const mapStateToProps = ({ customers, loading, error }) => {
  return { customers, loading, error };
};

const mapDispatchToProps = (dispatch, { invoiceAppService }) => {
  return {
    fetchCustomers: fetchCustomers(invoiceAppService, dispatch)
  }

};

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(CustomerPageContainer));