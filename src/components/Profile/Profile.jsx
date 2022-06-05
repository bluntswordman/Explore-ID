/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { defaultProfile } from '../../assets/index'
import { useProfile } from '../../hooks/users/profile';
import { useLogOutUser } from '../../hooks/users/logout';
import './Profile.css'

const imageProfile = defaultProfile;

const Profile =  () => {
  const {name, username} = useProfile();
  const {logOutUser} = useLogOutUser();

  return (
    <>
      <div className="container my-3">
        <button onClick={logOutUser}>log out</button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile