import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Row, Col, CardGroup, Card } from 'react-bootstrap';
import Map, { Marker, GeolocateControl }from 'react-map-gl';
import { Icon } from '@iconify/react';
import { Footer } from '../../components/index.js'
import axios from 'axios';
import { Personal } from '../../hooks/users/profile';
import { useLogOutUser } from '../../hooks/users/logout';
import './LandingPage.css';

const mapToken = process.env.REACT_APP_MAPBOX_TOKEN;

const LandingPage = () => {
  const [viewport, setViewport] = useState({
    latitude: -1.989275,
    longitude: 119.921327,
    zoom: 3.921327
  });
  const [location, setLocation] = useState([]);
  const [showContent, setShowContent] = useState([]);
  const {name} = Personal();
  const {logOutUser} = useLogOutUser();
  const isTrue = !name;

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/v1/location/');
        setLocation(res.data);
      } catch (err) {
        console.error(err)
      }
    };

    const content = async () => {
      try {
        const res = await axios.get('http://localhost:5000/v1/location/random');
        setShowContent(res.data);
      } catch (err) {
        console.error(err)
      }
    }

    getLocation();
    content();
  }, []);

  return (
    <div className="landing-wrapper">
      <Navbar>
        <Container>
          <Navbar.Brand href="/" className="fs-4 fw-bold" style={{color: '#0F4334'}}>Explore ID</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {isTrue ? (
              <>  
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropstart">
                      <a class="nav-link" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Icon icon="ep:setting" color="#0F4334" height="30" />
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Nav.Link href="/login" className="mx-2">Masuk</Nav.Link></li>
                        <li><Nav.Link href="/register" className="mx-2">Daftar</Nav.Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropstart">
                      <a class="nav-link" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Icon icon="healthicons:ui-user-profile" color="#0F4334" height="30" />
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Nav.Link href="/dashboard" className="mx-2">Dashboard</Nav.Link></li>
                        <li><Nav.Link onClick={logOutUser} className="mx-2">Keluar</Nav.Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="landing-container mb-5">
        <Row className="justify-content-center align-items-center margin-custom">
          <Col md={6} className="text-center">
            <Nav.Link eventKey="disabled" className="fw-bold fs-1" disabled>Explore the world of ID</Nav.Link>
            <Nav.Link eventKey="disabled" className="fw-bold fs-1" disabled>It's a Big World Out</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>Explore ID adalah sebuah aplikasi yang menyediakan informasi mengenai identitas dari masyarakat Indonesia.</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>This is a website that lets you explore Indonesia. You can search for tours throughout Indonesia, and view information on them.</Nav.Link>
            <p>
              Silahkan
              <a href="/login" className='text-decoration-none'> masuk </a> 
              untuk memulai. atau mulai
              <a href="/location" className='text-decoration-none'> Jelajah </a>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center margin-custom">
          <Col className="text-center mt-5">
            <Nav.Link eventKey="disabled" className="fw-bold fs-2" disabled>Explore the beauty of the world</Nav.Link>
            <Map
              mapboxAccessToken={mapToken}
              onViewportChange={setViewport}
              initialViewState={viewport}
              style={{width: '100%', height: '60vh', borderRadius: '12px', marginTop: '20px'}}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <GeolocateControl positionOptions={{enableHighAccuracy: true}} />
              {location.map(loc => (
                <>
                  <Marker key={loc.id} latitude={loc.lat} longitude={loc.lng}>
                    <Icon
                      icon="ic:twotone-room" 
                      color= "#0F4334"
                      height="35" 
                      cursor="pointer"
                    />
                  </Marker>
                </>
              ))}
            </Map>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center margin-custom">
          <Col className="text-center">
            <Nav.Link eventKey="disabled" className="fw-bold fs-2" disabled>Recommended place</Nav.Link>
            <CardGroup className='mb-3'>
              {showContent === [] || showContent === null ? console.log('no content') : showContent.map((item) => {
                return (
                  <Card className="border-0" key={item.id}>
                    <Card.Img variant="top" className="px-1 rounded-3 image-content" src={`http://localhost:5000/v1/${item.image}`} alt={item.title}/>
                    <Card.Body className="rounded-3 mx-1 shadow-sm text-start">
                      <Card.Text className="fw-light">Oleh : {item.name}</Card.Text>
                      <Card.Text className="fw-bolder">{item.title}</Card.Text>
                    </Card.Body>
                  </Card>
                )}
              )}
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default LandingPage