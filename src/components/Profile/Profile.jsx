import React, { useState } from 'react';
import { Container, Row, Card, Col, Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { defaultProfile } from '../../assets/core';
import { Personal } from '../../hooks/users/profile';
import { GetRefreshToken } from "../../hooks/token/refreshToken";
import './Profile.css';

const imageProfile = defaultProfile;

const Profile = () => {
  const {name, username} = Personal();
  const [updateName, setUpdateName] = useState('');
  const [updateUsername, setUpdateUsername] = useState('');
  const { userId, token, accessJWT } = GetRefreshToken();
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    try {
      const response = await accessJWT.put(`http://localhost:5000/v1/user/${userId}`, {
        name: updateName,
        username: updateUsername
      }, config)
      let timerInterval;
      Swal.fire({
        icon: 'success',
        title: response.data.msg,
        showConfirmButton: false,
        timer: 1000,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          window.location.reload(false);
        }
      })
    } catch (err) {
      return err;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="my-3">
        <Card className="mb-3 profile-img shadow">
          <Row className="g-0 align-items-center">
            <Col>
              <img src={imageProfile} className="img-fluid rounded-start p-3" alt={username}/>
            </Col>
            <Col className="col-md-8">
              <Card.Body className="text-start">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{username}</Card.Text>
              </Card.Body>
              <Card.Body  className="text-end">
                <Button variant="primary" className='btn-sm' onClick={handleShow}>Edit</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control type="text" placeholder="Username" value={updateUsername} onChange={(e) => setUpdateUsername(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type='submit'>Simpan</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
};

export default Profile;
