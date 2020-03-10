import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

const Cards = (props) => (
  <Card className="my-5">
    <Row className="py-5">
      <Col lg={4}>
          <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
          </p>     
      </Col>
      <Col lg={4}>
          <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
          </p>     
      </Col>
      <Col lg={4}>
          <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
          </p>
      </Col>
    </Row>
  </Card>
);

export default Cards;