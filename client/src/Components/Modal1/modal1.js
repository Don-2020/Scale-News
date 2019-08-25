import React from "react";
import {Modal, Button} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom"




function ModalLogin(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Already have an account? Log in:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
    
          <Form onSubmit = {props.redirect}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

      
     
</Form >
        </Modal.Body>
        <Modal.Footer>
          <Link to="/Topics">
        <Button variant="primary" type="submit" onClick={props.onHide}>
   Log In
  </Button>
  </Link>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalLogin;