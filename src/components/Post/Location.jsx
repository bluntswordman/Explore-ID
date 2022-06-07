import React from 'react';
import { Container, CardGroup, Card} from "react-bootstrap";
import { img1, img4, img5 } from '../../assets/index.js'

const Location = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-start'>Postingan Saya</h2>
      <CardGroup className="my-4">
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img5} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm">
            <Card.Title>Park Sako</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img1} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm">
            <Card.Title>Park Sako</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img variant="top" className="p-1 rounded-3 img-size" src={img4} alt="..."/>
          <Card.Body className="border rounded-3 mx-1 shadow-sm ">
            <Card.Title>Park Sako</Card.Title>
            <Card.Text>Hiya HIya</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
};

export default Location;
