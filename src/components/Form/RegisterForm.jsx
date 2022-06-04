/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { registerUser } from '../../hooks/users/register';
import './Form.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const user = { username, name, password, confirmPassword };

    registerUser(user)
  };

  return (
    <div className="bg-form">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className='text-header'><a href="/" className="text-decoration-none">Explore ID</a></h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-description">Bagikan moment tempat wisata mu!</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className='text-question'>Sudah memiliki akun ? <a href="/login">Masuk disini</a></p>
          </div>
        </div>
        <form onSubmit={ handleSubmit }>
          <div className="row pb-3">
            <div className="col">
              <input type="text" placeholder='Ketikan username disini' className="input-form" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="text" placeholder='Ketikan nama disini' className="input-form" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="password" placeholder='Password' className="input-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="password" placeholder='Konfirmasi Password' className="input-form" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <button className='button-form'>Buat Akun</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;