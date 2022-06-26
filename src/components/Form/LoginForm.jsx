import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { imageForm } from '../../assets/core';
import { loginUser } from '../../hooks/users/login';
import './form.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = { username, password };
    loginUser(user)
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <Row>
            <Col sm={6} className="text-black">
              <div className="px-5 ms-xl-4 mt-4">
                <span className="h1 fw-bold mb-0"><a href="/" className='brand-form'>Explore ID</a></span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <Form style={{width: "23rem"}} onSubmit={ handleSubmit }>
                  <h4 className="fw-normal">Masuk</h4>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicUsername">
                    <Form.Control 
                      type="text" 
                      placeholder="username" 
                      autoComplete='off' 
                      className="form-control-lg"
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicPassword">
                    <Form.Control 
                      type="password" 
                      placeholder="password" 
                      className="form-control-lg"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <p>Belum memiliki akun ? <a href="/register" className="linked-form">Daftar disini</a></p>
                  <button type="submit" className="btn-form">Masuk</button>
                </Form>
              </div>
            </Col>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={imageForm} alt="Loginimage" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </Row>
        </div>
      </section>
    </>
  )
};

export default LoginForm;
