import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col lg={4}>
      <UserProfile />
    </Col>
    <Col lg={8}>
      <h5>Contato</h5>
      <Form.Control type="email" placeholder="name@example.com" className="mb-3" />
      <Form.Control as="textarea" rows="3" className="mb-3" />
      <Button waves='light' className="right grey darken-2">Enviar</Button>
    </Col>
  </Row>
);

export default Contact;