import React, { useState } from 'react';
import { registerUser } from '../../hooks/users/register';
import {  Row, Col, Form } from 'react-bootstrap';
import { imageForm } from '../../assets/core';
import './form.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, name, password, confirmPassword };
    
    registerUser(user)
  };

  return (
    <>
       <section className="vh-100">
        <div className="container-fluid">
          <Row>
            <Col sm={6} className="text-black">
              <div className="px-5 ms-xl-4 mt-4">
                <span className="h1 fw-bold mb-0"><a href="/"  className='brand-form'>Explore ID</a></span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <Form style={{width: "23rem"}} onSubmit={ handleSubmit }>
                  <h4 className="fw-normal">Daftar</h4>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicUsername">
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Username"
                      autoComplete='off' 
                      className="form-control-lg"
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicName">
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Nama" 
                      autoComplete='off' 
                      className="form-control-lg"
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicPassword">
                    <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      className="form-control-lg"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="pb-3 form-outline" controlId="formBasicConfPassword">
                    <Form.Control 
                      type="password" 
                      placeholder="Konfirmasi Password" 
                      className="form-control-lg"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <p>Sudah memiliki akun ? <a href="/login" className="linked-form">Masuk disini</a></p>
                  <button type="submit" className="btn-form">Daftar</button>
                </Form>
              </div>
            </Col>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={imageForm} alt="Loginimage" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;

// {/* <Form onSubmit={ handleSubmit } className='form-local'>
//           <Form.Group className="pb-3" controlId="formBasicUsername">
//             <Form.Control type="text" placeholder="Enter Username" autoComplete='off' className="input-form" value={username} onChange={(e) => setUsername(e.target.value)}/>
//           </Form.Group>
//           <Form.Group className="pb-3" controlId="formBasicName">
//             <Form.Control type="text" placeholder="Enter Name" autoComplete='off' className="input-form" value={name} onChange={(e) => setName(e.target.value)}/>
//           </Form.Group>
//           <Form.Group className="pb-3" controlId="formBasicPassword">
//             <Form.Control type="password" placeholder="Enter Password" className="input-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
//           </Form.Group>
//           <Form.Group className="pb-3" controlId="formBasicConfirmPassword">
//             <Form.Control type="password" placeholder="Confirm Password" className="input-form" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
//           </Form.Group>
//           <Button type="submit" className="button-form">Daftar</Button>
//         </Form> */}
