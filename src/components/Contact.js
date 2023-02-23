import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState("");
  const { name, email, message } = formState;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <h1>Contact Information</h1>
      <Container>
        <Row>
          <Col>
            <div>Clinton Curtiss</div>
            <div>Curtissclinton@gmail.com</div>
          </Col>
          <Col>
            <Col>Contact Me</Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Your Name Here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email Here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message Here"
                  />
                </Form.Group>
                <Button variant="light" type="submit">
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
