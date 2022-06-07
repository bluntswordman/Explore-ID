import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './Footer.css';

const Footer = () => {
  return (
    <Container className="footer-container border-top text-start">
      <Row>
        <Col className='md-2'>
          <a href="http:/" target="_blank" rel="noopener noreferrer" className="text-decoration-none title-footer">Explore ID</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/" className="text-decoration-none text-dark fw-bolder">Tentang Kami</a>
          <span className="px-1 fw-bold">|</span>
          <a href="/" className="px-1 text-decoration-none text-dark fw-bolder">Kontak Kami</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">  
            <Icon icon="jam:instagram" color="#41436a" height="30" />
          </a>
          <a href="https://www.instagram.com/" className="px-1" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:instagram" color="#41436a" height="30" />
          </a>
          <a href="https://github.com/bluntswordman" className="px-1" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:github-square" color="#41436a" height="30" />
          </a>
          <a href="https://www.youtube.com/" className="px-1" target="_blank" rel="noopener noreferrer">
            <Icon icon="jam:youtube-square" color="#41436a" height="30" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>© 2022 All Rights Reserved, Explore ID</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Footer;
