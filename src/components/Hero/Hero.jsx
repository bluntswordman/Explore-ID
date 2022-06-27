import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './hero.css';

const Hero = () => {
  window.addEventListener('scroll', () => {
    window.scrollY >=  720 ? document.querySelector('#header').classList.add('fixed-top') : document.querySelector('#header').classList.remove('fixed-top')
  });

  const [hover, setHover] = useState(false);

  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <a href="/" className="hero-logo" data-aos="zoom-in">
            <Icon 
              icon="emojione-monotone:four-leaf-clover"
              style={{transition: 'all 0.3s ease-in-out', transform: hover ? 'scale(1.8)' : 'scale(1)'}}
              color={hover ? '#57bee6' : '#fff'}
              height="70"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </a>
          <h1 data-aos="zoom-in">Selamat Datang di <a href='/'>Explore ID</a></h1>
          <a data-aos="fade-up" data-aos-delay="200" href="/location" className="btn-get-started scrollto">Jelajah</a>
        </div>
      </section>
      <header 
        id="header" 
        className="d-flex align-items-center"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="/">Explore ID</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#rekomendasi">Rekomendasi</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#tentang">Tentang</a></li>
              <li><a className="nav-link scrollto" href="#kontak">Kontak</a></li>
            </ul>
            <Icon 
              icon="radix-icons:hamburger-menu"
              color="#57bee6"
              height="30" 
              className='mobile-nav-toggle'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#navbar').classList.toggle('navbar-mobile');
              }}
            />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Hero
