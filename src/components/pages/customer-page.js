import React, { Component } from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";
import { connect } from "react-redux";
import withInvoiceAppService from "../hoc/with-invoice-app-service";
import { fetchCustomers, onCustomerDeleted, onCustomerEdited, onShowAddModal, onShowEditModal } from "../../actions/index";
import Loader from "../loader";
import { bindActionCreators } from "redux";
import AddModal from "../add-modal";
import EditModal from "../edit-modal/edit-modal";

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
    const { customers, loading, onCustomerDeleted, onShowAddModal, onShowEditModal } = this.props;

    if (loading) {
      return <Loader />
    }

    return (
      <ItemPage title="Customer List" onAdd={onShowAddModal}>
        <ItemTable labels={customerTableLabels} items={customers} onDeleted={onCustomerDeleted} onEdit={onShowEditModal}/>
        <AddModal />
        <EditModal />
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
    onCustomerDeleted: onCustomerDeleted(invoiceAppService, dispatch),
    onCustomerEdited: onCustomerEdited(invoiceAppService, dispatch),
    onShowAddModal: bindActionCreators(onShowAddModal, dispatch),
    onShowEditModal: bindActionCreators(onShowEditModal, dispatch)
  }

};

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(CustomerPageContainer));