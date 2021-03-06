import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function handleSubmit(event) {
  event.preventDefault();
  //console.log('something');
  //get the values for email
  //get the values for password
  //data = email+password
  //login(data);
  login();
}

function login() {
  //function login(data){
  //console.log('hello?');
  /*axios.post("/api/users", data) {
    
  }
  */
  // <Redirect to="/topics" />
  window.location = '/topics';
}

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


        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>


          <Button variant="primary" type="submit" /*onClick={props.onHide}*/>
            Log In
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;