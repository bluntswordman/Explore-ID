import React from 'react';
import './Navigation.css';
import { useLogOutUser } from '../../hooks/users/logout';
import { useProfile } from '../../hooks/users/profile';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  const {name} = useProfile();
  const isTrue = !name
  
  return (
    <nav className="navbar navbar-light bg-secondary text-dark bg-opacity-10">
      <div className="container">
        <a href="/" className="navbar-brand title-nav">Explore ID</a>
        {
          isTrue ? (
            <>
              <a className="btn btn-core btn-sm mt-2" href='/login'>Login</a>
            </>
          ) : (
            <>
              <button className="btn btn-core btn-sm mt-2" onClick={logOutUser}>Logout</button>
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Navigation;