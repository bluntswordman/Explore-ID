import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-light bg-secondary text-dark bg-opacity-10">
      <div className="container">
        <a href="/" className="navbar-brand title">Explore ID</a>
        <button className="btn btn-primary ">Masuk</button>
      </div>
    </nav>
  )
}

export default Navigation;