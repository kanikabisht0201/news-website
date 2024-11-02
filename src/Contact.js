import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // Here you can add logic to handle language change in your app
    console.log(`Selected language: ${event.target.value}`);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 display-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="contact-info mb-4">
            <h4>Get in Touch</h4>
            <p>If you have any questions or feedback, please feel free to reach out to us using the form below or through our social media channels!</p>
            <p><strong>Email:</strong> support@newshub.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p>
              <strong>Follow Us:</strong>
              <a href="https://twitter.com/news_hub" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
              <a href="https://facebook.com/news_hub" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
              <a href="https://instagram.com/news_hub" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p>
          </div>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formLanguage">
              <Form.Label>Select News Language</Form.Label>
              <Form.Control as="select" value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
