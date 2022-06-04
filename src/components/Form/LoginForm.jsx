import React, { useState } from 'react'
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
            <p className='text-question'>Belum memiliki akun ? <a href="/register">Daftar disini</a></p>
          </div>
        </div>
        <form onSubmit={ handleSubmit }>
          <div className="row pb-3">
            <div className="col">
              <input type="text" placeholder='Username' className="input-form" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="password" placeholder='Password' className="input-form" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <button className='button-form'>Masuk</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;