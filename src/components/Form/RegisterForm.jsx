import React, { useState } from 'react';
import { registerUser } from '../../hooks/users/register';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Form.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, name, password, confirmPassword };
    
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    registerUser(user)
  };

  return (
    <div className="bg-form">
      <Container>
        <Row>
          <Col>
            <h2 className='text-header'><a href="/">Explore ID</a></h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-description">Bagikan moment tempat wisata mu!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-question'>Sudah memiliki akun ? <a href="/login">Masuk disini</a></p>
          </Col>
        </Row>
        <Form onSubmit={ handleSubmit } className='form-local'>
          <Form.Group className="pb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Enter Username" autoComplete='off' className="input-form" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Form.Group>
          <Form.Group className="pb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Enter Name" autoComplete='off' className="input-form" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="pb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" className="input-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="pb-3" controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" className="input-form" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Form.Group>
          <Button type="submit" className="button-form">Daftar</Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterForm;
