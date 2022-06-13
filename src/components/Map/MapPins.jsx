import React, { useState, useEffect } from 'react';
import Map, { Marker, NavigationControl }from 'react-map-gl';
import { Offcanvas, Form, Button, Modal} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { createLocation, deleteLocation, updateLocation } from '../../hooks/core';
import { Personal } from '../../hooks/users/profile';
import { GetRefreshToken } from "../../hooks/token/refreshToken";
import axios from 'axios';
import { defaultpng } from '../../assets/index'
import './MapLocation.css';

const mapToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapPins = () => {
  const [viewport, setViewport] = useState({
    latitude: -2.990934,
    longitude: 104.756554,
    zoom: 12
  });
  const [location, setLocation] = useState([]);
  const [curentPlaceId, setCurentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [show, setShow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState('');
  const [images, setImages] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const {name} = Personal();
  const isValid = !name;
  const curentUser = name;
  const { userId, token, accessJWT } = GetRefreshToken();

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

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImages(file);
    try {
      setPoster(URL.createObjectURL(file));
    } catch (error) {
      console.log(error);
    }
  }

  const handleMarkerClick = (getId) => {
    setCurentPlaceId(getId);
    setId(getId);
    setShowContent(true);
  }

  const handleMapClick = (e) => {
    setNewPlace({ lat: e.lngLat.lat, lng: e.lngLat.lng });
    setShow(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newlat = newPlace.lat;
    const newlng = newPlace.lng;
    const newLocation = { title, description, images, newlat, newlng, name, userId, token, accessJWT };
    
    createLocation(newLocation);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const tempLocation = { id, newTitle, newDescription, name, token, accessJWT };
    updateLocation(tempLocation);
    setShowEdit(false);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    deleteLocation(id);
  }
  
  const handleClose = () => setShow(false);
  const handleCloseContent = () => setShowContent(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  return (
    <>
      <Map
        mapboxAccessToken={mapToken}
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
                color= {loc.name === curentUser ? '#00ff00' : '#ff0000'}
                height="35" 
                cursor="pointer"
                onClick={() => handleMarkerClick(loc.id)}/>
            </Marker>
            {loc.id === curentPlaceId && (
              <>
                <Offcanvas show={showContent} onHide={handleCloseContent}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{loc.title}</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <img src={loc.image === null || loc.image === 'no-image.png' ? defaultpng :`http://localhost:5000/v1/${loc.image}`} alt={loc.title} className="img-popup"/>
                    <div className="about-popup">
                      <p className='author-popup'>By {loc.name}</p>
                      <p className='description-popup'>"{loc.description}"</p>
                    </div>
                    {loc.name === curentUser && (
                      <div className="button-popup">
                        <Button variant="primary" size="sm" onClick={handleShowEdit}>edit</Button>
                        <Button variant="danger" size="sm" onClick={handleDelete}>hapus</Button>
                      </div>
                    )}
                    <p className="text-break">____________________________________________________</p>
                  </Offcanvas.Body>
                  <Offcanvas.Body>
                    <p></p>
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            )}
          </>
        ))}
        {newPlace && (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Tambah Tempat Wisata</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {
                isValid ? (
                  <>
                    <p>Silahkan login terlebih dahulu untuk menambahkan tempat wisata</p>
                  </>
                ) : (
                  <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Form.Group className="mb-3">
                      {poster && (
                        <img src={poster} alt="poster" className="img-popup"/>
                      )}
                      <Form.Control type="file" name='images' width="50" height="250" onChange={(e) => onImageUpload(e)} encType=""/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Masukan Judul" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control as="textarea" rows={12} placeholder="Deskripsikan Tempat yang ingin anda bagikan" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Button variant="secondary" type="submit">Simpan</Button>
                  </Form>
                )
              }
            </Offcanvas.Body>
          </Offcanvas>
        )}
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Masukan Judul" autoComplete='off' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={12} placeholder="Deskripsikan Tempat yang ingin anda bagikan" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type='submit'>Simpan</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Map>
    </>
  )
};

export default MapPins;
