import React from 'react';
import './Navigation.css';
import { useLogOutUser } from '../../hooks/users/logout';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  return (
    <nav className="navbar navbar-light bg-secondary text-dark bg-opacity-10">
      <div className="container">
        <a href="/" className="navbar-brand title-nav">Explore ID</a>
        {!document.cookie.includes('refresh_Token') && (
          <a className="btn btn-core btn-sm mt-2" href='/login'>Login</a>
          )}
        {document.cookie.includes('refresh_Token') && (
          <button className="btn btn-core btn-sm mt-2" onClick={logOutUser}>Logout</button>
        )}
      </div>
    </nav>
  )
}

export default Navigation;

// {/* includes('refresh_Token') ? (
//           <a className="btn btn-core btn-sm mt-2" href='/login'>Login</a>
//           ) : (
//           <button className="btn btn-core btn-sm mt-2" onClick={logOutUser}>Logout</button>
//         )} */}