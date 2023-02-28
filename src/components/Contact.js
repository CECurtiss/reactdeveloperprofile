import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vgfpnf",
        "contact_form",
        formRef.current,
        "AHnTbdfcv5XP2JiV4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormContact({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1 className="mb-5 mt-5">Contact Information</h1>
      <Container>
        <Row>
          <Col>
            <h2>Clinton Curtiss</h2>
            <h4 className="mb-5">Lawrence, KS</h4>
            <h2>Send me an Email!</h2>
            <h4>
              <a href="mailto:curtissclinton@gmail.com">
                curtissclinton@gmail.com
              </a>
            </h4>
          </Col>
          <Col>
            <Col><h2>Contact Me</h2></Col>
            <Col>
              <Form ref={formRef}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={formContact.name}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your Name Here"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={formContact.email}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Your Email Here"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    value={formContact.message}
                    name="message"
                    onChange={handleChange}
                    as="textarea"
                    rows={4}
                    placeholder="Your Message Here"
                  />
                </Form.Group>
                <Button onClick={handleSubmit} variant="light" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
