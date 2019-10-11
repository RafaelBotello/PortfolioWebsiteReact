import React from "react";
import Lorem from "../Lorem";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTwitter,
  faGoogle,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title-text">
        My Contact
        <hr />
      </h1>
      <div className="content-text">
        <Form>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>
            <a
              href="https://github.com/rafaelbotello"
              target="blank"
              className="icon gplus-ic"
            >
              <FontAwesomeIcon
                className="limit"
                icon={faGithub}
                color="#3D4B5B"
                size="3x"
              />
            </a>
            <a
              href="https://facebook.com"
              target="blank"
              className="icon fb-ic"
            >
              <FontAwesomeIcon
                className="limit"
                icon={faFacebookF}
                color="#3D4B5B"
                size="3x"
              />
            </a>
            <a href="https://twitter.com" target="blank" className="icon tw-ic">
              <FontAwesomeIcon
                className="limit"
                icon={faTwitter}
                color="#3D4B5B"
                size="3x"
              />
            </a>
            <a
              href="https://www.instagram.com/jimmyplox/?hl=en"
              target="blank"
              className="icon ins-ic"
            >
              <FontAwesomeIcon
                className="limit"
                icon={faInstagram}
                color="#3D4B5B"
                size="3x"
              />
            </a>
            <a
              href="https://youtube.com"
              target="blank"
              className="icon pin-yt"
            >
              <FontAwesomeIcon
                className="limit"
                icon={faYoutube}
                color="#3D4B5B"
                size="3x"
              />
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
