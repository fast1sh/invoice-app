import React, { Component } from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";
import { connect } from "react-redux";
import withInvoiceAppService from "../hoc/with-invoice-app-service";
import { fetchCustomers, onCustomerDeleted, onShowAddModal } from "../../actions/index";
import Loader from "../loader";
import { bindActionCreators } from "redux";
import AddModal from "../add-modal";

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
    const { customers, loading, onCustomerDeleted, onShowAddModal } = this.props;
    console.log('customerpage', this.props);

    if (loading) {
      return <Loader />
    }

    return (
      <ItemPage title="Customer List" onAdd={onShowAddModal}>
        <ItemTable labels={customerTableLabels} items={customers} onDeleted={onCustomerDeleted} />
        <AddModal />
      </ItemPage>
    )
  }
}

const mapStateToProps = ({ customerPage: { customers, loading, error }}) => {
  return { customers, loading, error };
};

const mapDispatchToProps = (dispatch, { invoiceAppService }) => {
  return {
    fetchCustomers: fetchCustomers(invoiceAppService, dispatch),
    addCustomer: invoiceAppService.addCustomer,
    onCustomerDeleted: onCustomerDeleted(invoiceAppService, dispatch),
    onShowAddModal: bindActionCreators(onShowAddModal, dispatch)
  }

};

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(CustomerPageContainer));