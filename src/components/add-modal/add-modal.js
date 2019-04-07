import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { onCloseAddModal } from "../../actions";
import './add-modal.css';
import { bindActionCreators } from "C:/Users/Daniil/AppData/Local/Microsoft/TypeScript/3.4/node_modules/redux";

const AddModal = (props) => {
  console.log('addmodal', props);
  return (
    <React.Fragment>
      <Modal show={props.showAddModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add new customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="name" placeholder="Name"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Adress
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="adress" placeholder="Adress" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Phone
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" placeholder="Number" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          1233
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
};

const mapStateToProps = ({ showAddModal }) => {
  return { showAddModal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: bindActionCreators(onCloseAddModal, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);