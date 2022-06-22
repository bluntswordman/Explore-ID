import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <Container className="footer-container border-top text-start">
      <Row>
        <Col className="d-flex">
          <Nav.Link href="/" className="text-decoration-none fw-bold fs-3">Explore ID</Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Nav.Link href="/about" className="text-decoration-none text-dark fw-bolder">Tentang Kami</Nav.Link>
          <Icon icon="ci:line-xl" color="#000" height="21" />
          <Nav.Link href="/contact" className="text-decoration-none text-dark fw-bolder">Kontak Kami</Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Nav.Link href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:facebook-square" color="#41436a" height="30" />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:instagram" color="#41436a" height="30" />
          </Nav.Link>
          <Nav.Link href="https://github.com/bluntswordman" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:github-square" color="#41436a" height="30" />
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Nav.Link eventKey="disabled" disabled>© 2022 All Rights Reserved, Explore ID</Nav.Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Footer;
