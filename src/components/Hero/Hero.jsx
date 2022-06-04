import React from 'react';
import { Icon } from '@iconify/react';
import './/Hero.css';

const Hero = () => {
  return (
    <section className="bg-image">
      <div className="container pt-5 text-center">
        <div className="row pt-5">
          <div className="col pt-5">
            <h2 className="main-title">Jelajah Lebih Dalam Wisata <span className="title-flik">Indonesia</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/location" className="btn btn-core btn-sm">Explore <span><Icon icon="bi:arrow-right-circle" color="#ffffff" height="20" /></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero