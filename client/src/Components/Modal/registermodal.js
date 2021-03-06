import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from 'axios';

function handleSubmit(event) {
  event.preventDefault();
  console.log('something');
  //get the values for email
  //get the values for password
  //register(values);
}

function register() {
  //axios.post("/api/users", data)
  window.location = '/home';
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please fill in this form to create an account:</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="password" placeholder="Repeat Password" />
          </Form.Group>
          <hr />

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <Button variant="primary" type="submit">
            Sign Up
  </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
