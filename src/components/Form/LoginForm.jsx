import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { loginUser } from '../../hooks/users/login';
import './Form.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = { username, password };
    loginUser(user)
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
            <p className='text-question'>Belum memiliki akun ? <a href="/register">Daftar disini</a></p>
          </Col>
        </Row>
        <Form onSubmit={ handleSubmit } className='form-local'>
          <Form.Group className="pb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Enter Username" autoComplete='off' className="input-form" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Form.Group>
          <Form.Group className="pb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" className="input-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button type="submit" className="button-form">Masuk</Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
