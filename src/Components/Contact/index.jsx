import React from "react";
import Lorem from "../Lorem";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title-text">
        My Contact
        <hr />
      </h1>
      <div className="content-text">
        <Form action="mailto:rafaelbotellov@outlook.com?subject=Website%20Contact">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message: </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button className="form-button" variant="primary" type="submit">
            Submit
          </Button>
          <p class>Follow my journey on social media!</p>
          <SocialMedia />
        </Form>
      </div>
    </div>
  );
};

export default Contact;
