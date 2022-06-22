import React, { useState, useEffect } from 'react';
import Map, { Marker, NavigationControl, GeolocateControl }from 'react-map-gl';
import { Offcanvas, Form, Button, Modal, InputGroup, Card, Accordion, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { createLocation, deleteLocation, updateLocation } from '../../hooks/core';
import createComment from '../../hooks/comment/addComment'
import { Personal } from '../../hooks/users/profile';
import { GetRefreshToken } from "../../hooks/token/refreshToken";
import axios from 'axios';
import { defaultpng, addImage, defaultProfile } from '../../assets/index'
import './MapLocation.css';

const mapToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapPins = () => {
  const [viewport, setViewport] = useState({
    latitude: -1.989275,
    longitude: 119.921327,
    zoom: 3.921327
  });
  const [location, setLocation] = useState([]);
  const [curentPlaceId, setCurentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [show, setShow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState(addImage);
  const [images, setImages] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState([]);

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

    const getComment = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/v1/comment/${id}`);
        setShowComment(res.data);
      } catch (err) {
        console.error(err)
      }
    }

    getLocation();
    getComment();
  }, [id]);

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

  const handleSaveComment = async (e) => {
    e.preventDefault();
    const newComment = { comment, name, userId, id, token, accessJWT };
    createComment(newComment);
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
        style={{width: '100%', height: '91vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onDblClick={handleMapClick}
      >
        <NavigationControl/>
        <GeolocateControl
          showAccuracyCircle={false}
        />
        {location.map(loc => (
          <>
            <Marker key={loc.id} latitude={loc.lat} longitude={loc.lng}>
              <Icon
                icon="ic:twotone-room" 
                color= {loc.name === curentUser ? '#00ff00' : '#ff0000'}
                height="35" 
                cursor="pointer"
                onClick={() => handleMarkerClick(loc.id)}/>
            </Marker>
            { loc.id === curentPlaceId && (
              <>
                <Offcanvas show={showContent} onHide={handleCloseContent}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fs-4 fw-semibold">{loc.title}</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <img src={loc.image === null || loc.image === 'no-image.png' ? defaultpng :`http://localhost:5000/v1/${loc.image}`} alt={loc.title} className="img-popup"/>
                    <div className="about-popup">
                      <Nav.Link eventKey="disabled" className="fst-italic mb-2" disabled>By {loc.name}</Nav.Link>
                      <Nav.Link eventKey="disabled" className="text-center overflow-hidden" disabled>"{loc.description}"</Nav.Link>
                    </div>
                    {loc.name === curentUser && (
                      <div className="button-popup">
                        <Button variant="primary" size="sm" onClick={handleShowEdit}>edit</Button>
                        <Button variant="danger" size="sm" onClick={handleDelete}>hapus</Button>
                      </div>
                    )}
                    <Accordion className="my-3 p-2" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Komentar</Accordion.Header>
                        <Accordion.Body>
                          {showComment.comments.length === 0 ? 
                            <h5>Belum ada yang berkomentar</h5> 
                            : 
                            showComment.comments.map(comment =>
                              <Card border="light" style={{ width: '100%' }} className="my-3">
                                <Card.Header className="d-flex">
                                  <Card.Img 
                                    variant="top" 
                                    src={defaultProfile} 
                                    style={{
                                      maxWidth: '30px',
                                      height: 'auto',
                                      marginRight: '10px',
                                    }}
                                  />
                                  <Card.Text className="mt-1">{comment.commentAuthor}</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                  <Card.Text>{comment.commentBody}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  <Nav.Link eventKey="disabled" className="text-muted fs-6" disabled>Last updated 3 mins ago</Nav.Link>
                                </Card.Footer>
                              </Card>
                            )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Offcanvas.Body>
                  <Offcanvas.Body>
                    { !isValid && (
                      <Form onSubmit={handleSaveComment}>
                        <InputGroup style={{ overflow: 'hidden' }}>
                          <Form.Control placeholder="Ketikan komentar disini" aria-label="Ketikan komentar disini" aria-describedby="basic-addon2" value={comment} onChange={e => setComment(e.target.value)} />
                          <Button variant="outline-secondary" id="button-addon2" type="submit">Kirim</Button>
                        </InputGroup>
                      </Form>
                    )}
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            )}
          </>
        ))}
        {newPlace && (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fs-4 fw-semibold">Tambah Tempat Wisata</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              { isValid ? (
                <>
                  <Nav.Link eventKey="disabled" className="text-muted fs-6" disabled>Silahkan login terlebih dahulu untuk menambahkan tempat wisata</Nav.Link>
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
              )}
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
