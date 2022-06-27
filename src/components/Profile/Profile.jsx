import React, { useState } from 'react';
import Swal from "sweetalert2";
import { defaultProfile } from '../../assets/core';
import { Personal } from '../../hooks/users/profile';
import { GetRefreshToken } from "../../hooks/token/refreshToken";
import './Profile.css';

const Profile = () => {
  const {name, username} = Personal();
  const [updateName, setUpdateName] = useState('');
  const [updateUsername, setUpdateUsername] = useState('');
  const { userId, token, accessJWT } = GetRefreshToken();

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

  return (
    <>
      <div className="container" style={{marginTop: 90}}>
        <section className="profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={defaultProfile} alt="Profile" className="rounded-circle mb-2 pb-2"/>
                  <h2>{name}</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Data saya</button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Ubah data</button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title my-3">Profile Detail</h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Nama</div>
                        <div className="col-lg-9 col-md-8">{name}</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Username</div>
                        <div className="col-lg-9 col-md-8">{username}</div>
                      </div>
                    </div>
                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                      <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label" htmlFor='name'>Nama</label>
                          <div className="col-md-8 col-lg-9">
                            <input 
                              name="name" 
                              type="text" 
                              className="form-control" 
                              id="name" 
                              value={updateName} 
                              onChange={(e) => setUpdateName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label" htmlFor="username">Username</label>
                          <div className="col-md-8 col-lg-9">
                            <input 
                              name="username" 
                              type="text" 
                              className="form-control" 
                              id="username" 
                              value={updateUsername} 
                              onChange={(e) => setUpdateUsername(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit">Simpan</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};

export default Profile;
