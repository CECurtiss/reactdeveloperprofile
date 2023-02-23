import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Contact() {
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
    console.log(formContact);
    setFormContact({ name: "", email: "", message: "" });
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
                <Button onSubmit={handleSubmit} variant="light" type="submit">
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
