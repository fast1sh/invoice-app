import React from "react";
import { Modal, Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { onCloseAddModal } from "../../actions";
import './add-modal.css';
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

const AddModal = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showAddModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add new customer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <Form>
            <Form.Group as={Row}>
              <Form.Label>
                Name
              </Form.Label>
              <Form.Control type="name" placeholder="Mark Benson"/>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label>
                Adress
              </Form.Label>
              <Form.Control type="adress" placeholder="353 Rochester St, Rialto FL 43260" />
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label>
                Number
              </Form.Label>
              <Form.Control type="phone" placeholder="555-354-2342" />
            </Form.Group>
            <Button variant="primary" type="submit" className="modal__button">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
};

const mapStateToProps = ({ customerPage: { showAddModal }}) => {
  return { showAddModal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: bindActionCreators(onCloseAddModal, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);