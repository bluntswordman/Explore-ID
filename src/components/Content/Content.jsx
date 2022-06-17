import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import './Content.css';

const Content = () =>{
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    const content = async () => {
      try {
        const res = await axios.get('http://localhost:5000/v1/location/random');
        setShowContent(res.data);
      } catch (err) {
        console.error(err)
      }
    }
    content();
  }, []);

  return (
    <Container className="my-5">
      <Row className="m-4">
        <Col>
          <h1 className="text-center">Rekomendasi Tempat Wisata</h1>
        </Col>
      </Row>
      <CardGroup className="my-4">
        {showContent === [] || showContent === null ? console.log('no content') : showContent.map((item) => {
          return (
            <Card className="border-0" key={item.id}>
              <Card.Img variant="top" className="p-1 rounded-3 img-size" src={`http://localhost:5000/v1/${item.image}`} alt="..."/>
              <Card.Body className="border rounded-3 mx-1 shadow-sm">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text size="sm">by <span className="fw-lighter fst-italic">{item.name}</span></Card.Text>
                <Card.Text>" {item.description} "</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </CardGroup>
    </Container>
  )
};

export default Content
