import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

const Experience = (props) => (
  <Card className="p-3 mb-5">
    <Row>
      <Col s={2} m={2} className="text-center">
        <img src={props.avatar} className="circle responsive-img" alt={props.alt} />
        { props.name }
      </Col>

      <Col s={10}>
        <p><b>{props.title} in <span className="">{props.company}</span></b></p>
        <p>{props.description}</p>
      </Col>
    </Row>
  </Card>
);

export default Experience;