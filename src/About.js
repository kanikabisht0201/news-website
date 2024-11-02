import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import logo from "./news-hub-logo.png"; // Ensure the path is correct

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 display-4">About Us</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h3 className="text-center">Welcome to News Hub</h3>
              <Card.Img
                variant="top"
                src={logo} // Use the logo here
                className="img-fluid rounded mb-4"
              />
              <p className="text-center">
                At News Hub, we bring you the latest news from around the globe, curated to meet the interests of our diverse audience. Founded with a mission to deliver accurate and reliable information, we aim to keep our readers informed about the world around them.
              </p>
              <h4 className="text-center">Our Mission</h4>
              <p className="text-center">
                We strive to empower our readers with knowledge and insights into the events that shape our world. With a focus on transparency and integrity, we aim to deliver content that inspires and informs. We believe that well-informed individuals contribute to stronger communities.
              </p>
              <h4 className="text-center">Our Values</h4>
              <p className="text-center">
                - **Integrity**: We uphold the highest standards of journalism by providing factual and unbiased news.<br />
                - **Transparency**: We are committed to disclosing our sources and methodologies, ensuring our readers understand how we gather news.<br />
                - **Community Engagement**: We encourage dialogue and participation from our audience, as we believe everyone’s voice matters.
              </p>
              <h4 className="text-center">Join Us</h4>
              <p className="text-center">
                Stay updated by subscribing to our newsletter or following us on social media. Your feedback and engagement are vital to our growth and improvement. Thank you for being part of our community!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
