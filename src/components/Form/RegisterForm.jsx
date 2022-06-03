import React from 'react';
import './Form.css';

const RegisterForm = () => {
  return (
    <div className="bg-form">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className='text-header'>Daftar</h2>
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
        <form>
          <div className="row pb-3">
            <div className="col">
              <input type="text" placeholder='Ketikan nama disini' className="input-form"/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="text" placeholder='Ketikan username disini' className="input-form"/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="password" placeholder='Password' className="input-form"/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col">
              <input type="password" placeholder='Konfirmasi Password' className="input-form"/>
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