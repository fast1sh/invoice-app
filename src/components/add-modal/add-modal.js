import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { onCloseAddModal, onCustomerAdded } from "../../actions";
import './add-modal.css';
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import withInvoiceAppService from "../hoc/with-invoice-app-service";

let AddForm = (props) => {
  const { handleSubmit, onCustomerAdded } = props;
  console.log('!!!!!!!!!!!!', handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">Name</label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Mark Benson"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Adress</label>
        <Field
          name="adress"
          component="input"
          type="text"
          placeholder="353 Rochester St, Rialto FL 43260"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Number</label>
        <Field
          name="number"
          component="input"
          type="tel"
          placeholder="555-354-2342"
          className="form-control"
          required
        />
      </div>
      <Button variant="primary" type="submit" className="modal__button">
        Add
      </Button>
    </form>
  );
}

AddForm = reduxForm({
  form: 'add'
})(AddForm);

const AddModal = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showAddModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add new customer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <AddForm onSubmit={props.onCustomerAdded} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
};

const mapStateToProps = ({ customerPage: { showAddModal }}) => {
  return { showAddModal };
};

const mapDispatchToProps = (dispatch, { invoiceAppService }) => {
  return {
    onHide: bindActionCreators(onCloseAddModal, dispatch),
    onCustomerAdded: (customer) => onCustomerAdded(invoiceAppService, dispatch)(customer)
  }
};

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps)(AddModal));