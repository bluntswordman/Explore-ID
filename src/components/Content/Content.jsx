import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import { img1, img2, img3 } from '../../assets/index.js';
import './Content.css';

const Content = () =>{
  return (
    <Container className="my-5">
      <Row className="m-4">
        <Col>
          <h1 className="text-center">Rekomendasi Tempat Wisata</h1>
        </Col>
      </Row>
      <CardGroup className="my-4">
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img2} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm">
            <Card.Title>XXX</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
            <Card.Text size="sm">Kitou Akari</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img1} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm">
            <Card.Title>YYY</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
            <Card.Text size="sm">Kitou Akari</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img3} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm ">
            <Card.Title>ZZZ</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
            <Card.Text size="sm">Kitou Akari</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
};

export default Content
