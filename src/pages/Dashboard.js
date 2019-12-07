import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => (
  <Container>
    <Row>
      <h1>hello creature...</h1>
    </Row>

    <Row>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['far', 'smile']} />
      <FontAwesomeIcon icon={['fab', 'github']} />
      <FontAwesomeIcon icon={['fab', 'react']} />
      <FontAwesomeIcon icon={['far', 'grin-alt']} />
      <FontAwesomeIcon icon={['fas', 'cannabis']} />
    </Row>

    <Row>
      <Button className="radicalBtn">Secondary</Button>
    </Row>
  </Container>
);

export default Dashboard;
