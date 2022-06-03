import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-secondary text-dark bg-opacity-10">
      <div className="container">
        <a href="/" className="navbar-brand title">Explore ID</a>
        <a href="/login" className="btn btn-primary ">Masuk</a>
      </div>
    </nav>
  )
}

export default Navigation;