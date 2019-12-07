import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Layout = ({ children }) => (
  <Container>
    <Row className="justify-content-center">
      {children}
    </Row>
  </Container>
);

export default Layout;
