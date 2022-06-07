import React, { useState, useEffect } from 'react';
import Map, { Marker, NavigationControl, Popup }from 'react-map-gl';
import { Offcanvas, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import axios from 'axios';

import { addImage, img4 } from '../../assets/index'

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const MapPins = () => {
  const imageAdd = addImage;
  const contentImg = img4;
  const curenTest = 'Hallo'
  const [viewport, setViewport] = useState({
    latitude: -2.8589027866161216,
    longitude: 104.75324233,
    zoom: 12
  });
  const [location, setLocation] = useState([]);
  const [curentPlaceId, setCurentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/v1/location/');
        setLocation(res.data);
      } catch (err) {
        console.error(err)
      }
    };

    getLocation();
  }, []);

  const handleMarkerClick = (id) => {
    setCurentPlaceId(id);
  }

  const handleMapClick = (e) => {
    setNewPlace({
      lat: e.lngLat.lat,
      lng: e.lngLat.lng
    });
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <>
      <Map
        mapboxAccessToken={token}
        onViewportChange={setViewport}
        initialViewState={viewport}
        style={{width: '100%', height: '90vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onDblClick={handleMapClick}
      >
        <NavigationControl/>
        {location.map(loc => (
          <>
            <Marker
              key={loc._id}
              latitude={loc.lat}
              longitude={loc.lng}
            >
              <Icon
                icon="ic:twotone-room" 
                color= {loc.title === curenTest ? '#00ff00' : '#ff0000'}
                height="35" 
                cursor="pointer"
                onClick={() => handleMarkerClick(loc.id)}/>
            </Marker>
            {loc.id === curentPlaceId && (
              <Popup longitude={loc.lng} latitude={loc.lat}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurentPlaceId(null)}
                anchor="left" style={{
                  width: 'auto',
                  height: "auto"
                }}>
                <img src={contentImg} alt={loc.title} style={{
                  maxWidth:'300px',
                  borderRadius: '5px'
                  }}/>
                  <div className="text-start">
                    <h5 className="text-capitalize fw-bold ">{loc.title}</h5>
                    <p className="fst-italic fs-6">{loc.description}</p>
                  </div>
                  <ButtonGroup size="sm">
                    <Button variant='secondary'>Detail</Button>
                    <Button variant='danger'>hapus</Button>
                  </ButtonGroup>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Tambah Tempat WIsata</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="image" src={imageAdd} alt="Submit" width="50" height="250" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Masukan Judul" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Deskripsikan Tempat yang ingin anda bagikan" />
                </Form.Group>
                <Button variant="secondary" type="submit">Simpan</Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </Map>
    </>
  )
};

export default MapPins;
