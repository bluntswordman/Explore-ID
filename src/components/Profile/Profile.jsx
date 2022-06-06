/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { defaultProfile } from '../../assets/index'
import { useProfile } from '../../hooks/users/profile';
import './Profile.css'

const imageProfile = defaultProfile;

const Profile =  () => {
  const {name, username} = useProfile();

  return (
    <>
      <div className="container my-3">
        <div className="card mb-3 profile-img shadow">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img src={imageProfile} className="img-fluid rounded-start p-3" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body text-start">
                <h3 className="card-title">{name}</h3>
                <p className="card-text"><small className="text-muted">{username}</small></p>
              </div>
              <div className="card-body text-end">
                <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Username</label>
                  <input type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Name</label>
                  <input type="text" className="form-control" id="recipient-name"/>
                </div>
              </form>
            </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Profile