import React, { useState, useEffect } from 'react';
import { Container, CardGroup, Card, Row, Col, Nav } from "react-bootstrap";
import { GetRefreshToken } from "../../hooks/token/refreshToken";

const MyPost = () => {
  const { userId, accessJWT } = GetRefreshToken();
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    const myContent = async () => {
      try {
        const res = await accessJWT.get(`http://localhost:5000/v1/location/locself/${userId}`);
        setShowContent(res.data);
      } catch (err) {
        console.error(err)
      }
    };
    myContent();
  }, [userId,accessJWT]);
  
  return (
    <Container className='my-5'>
      <Nav.Link eventKey="disabled" className="fw-bold fs-2" disabled>Postingan Saya</Nav.Link>
      <CardGroup>
        <Row xs={1} md={3} className="g-4">
          {showContent === [] || showContent === null ? console.log('no content') : showContent.map((item) => {
            return (
              Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={`http://localhost:5000/v1/${item.image}`}/>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )
          })}
        </Row>
      </CardGroup>
    </Container>
  )
}

export default MyPost