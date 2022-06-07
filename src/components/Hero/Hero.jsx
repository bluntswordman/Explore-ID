import React from 'react';
import { Icon } from '@iconify/react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="bg-image">
      <Container className="pt-5 text-center">
        <Row className="pt-5">
          <Col className="pt-5">
            <h2 className="main-title">Jelajah Lebih Dalam Wisata <span className="title-flik">Indonesia</span></h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/location" className="btn btn-core btn-sm">Explore <Icon icon="bi:arrow-right-circle" color="#ffffff" height="20" /></a>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Hero;
