import React from 'react';
import { Icon } from '@iconify/react';
import { useLogOutUser } from '../../hooks/users/logout';
import { Personal } from '../../hooks/users/profile';
import { trueUser } from '../../assets/core'
import './Navigation.css';

const Navigation = () => {
  const {logOutUser} = useLogOutUser();
  const {name, photo} = Personal();
  const isTrue = !name;
  
  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center bg-secondary">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            Explore ID
          </a>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
          { isTrue ? (
            <>
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
                  <Icon icon="ant-design:setting-outlined" color="#57bee6" height="25" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="/login">
                      <Icon icon="codicon:sign-in" color="#57bee6" height="23" />
                      <span className="px-2">Masuk</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="/register">
                      <Icon icon="system-uicons:create" color="#57bee6" height="24" />
                      <span className="px-2">Daftar</span>
                    </a>
                  </li>
                </ul>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
                  <img 
                    src={photo === 'default.png' ? trueUser : `http://localhost:5000/v1/${photo}`} 
                    alt="foto Profile" 
                    className="rounded-circle"/>
                  <span className="d-none d-md-block dropdown-toggle ps-2 text-light">{name}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>{name}</h6>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="/dashboard">
                      <Icon icon="charm:person" color="#57bee6" height="20" />
                      <span className="px-2">Profil saya</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="/location">
                      <Icon icon="bxs:map-pin" color="#57bee6" height="20" />
                      <span className="px-2">Peta wisata</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="/login" onClick={logOutUser}>
                      <Icon icon="charm:sign-out" color="#57bee6" height="20" />
                      <span className="px-2">Keluar</span>
                    </a>
                  </li>
                </ul>
              </li>
            </>
          )}
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Navigation;
