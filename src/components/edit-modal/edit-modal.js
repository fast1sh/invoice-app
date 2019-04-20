import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onCloseEditModal, onCustomerEdited } from "../../actions";
import { reduxForm, Field } from "redux-form";
import withInvoiceAppService from "../hoc";
import './edit-modal.css';

let EditForm = (props) => {

  const { handleSubmit, onCancel } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">Name</label>
        <Field
          name="name"
          component="input"
          type="text"
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
          className="form-control"
          required
        />
      </div>
      <Button variant="primary" type="submit" className="modal__button">
        Edit
      </Button>
      <Button variant="outline-dark" type="button" className="modal__button" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
}

EditForm = reduxForm({
  form: 'edit'
})(EditForm);

const EditModal = (props) => {

  const { showEditModal, onHide, onCustomerEdited, customers, editingCustomerIdx } = props;
  const initialValues = customers[editingCustomerIdx];

  return (
    <React.Fragment>
      <Modal show={showEditModal} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit customer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <EditForm onSubmit={onCustomerEdited} onCancel={onHide} initialValues={initialValues}/>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
};

const mapStateToProps = ({ customerPage: { showEditModal, editingCustomerIdx, customers }}) => {
  return { showEditModal, editingCustomerIdx, customers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: bindActionCreators(onCloseEditModal, dispatch),
    dispatch
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

  const { editingCustomerIdx } = stateProps;
  const { dispatch } = dispatchProps;
  const { invoiceAppService } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
    onCustomerEdited: (customer) => onCustomerEdited(invoiceAppService, dispatch)(editingCustomerIdx, customer)
  }
}

export default withInvoiceAppService()(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditModal));