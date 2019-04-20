import React, { Component } from "react";
import ItemPage from "../item-page";
import ItemTable from "../item-table";
import { connect } from "react-redux";
import withInvoiceAppService from "../hoc/with-invoice-app-service";
import Loader from "../loader";

const productTableLabels = ['#', 'Name', 'Price'];

class ProductPage extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, onProductDeleted, onShowAddModal, onShowEditModal } = this.props;

    if (loading) {
      return <Loader />
    }

    return (
      <ItemPage title="Product List" onAdd={onShowAddModal}>
        <ItemTable labels={productTableLabels} items={products} onDeleted={onProductDeleted} onEdit={onShowEditModal} />

      </ItemPage>
    )
  }
};

const mapStateToProps = ({ productPage: { products, loading, error }}) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { invoiceAppService }) => {
  return {
    name: 1
  }
}

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(ProductPage));