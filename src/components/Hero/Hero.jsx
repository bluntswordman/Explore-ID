import React from 'react';
import './/Hero.css';


const Hero = () => {
  return (
    <section className="bg-image">
      <div className="container pt-5 text-start">
        <div className="row pt-5">
          <div className="col-md-6 pt-5">
            <h1 className="title">Explore ID</h1>
            <p className="subtitle text-white fw-semibold">
              Explore Indonesia's tourist attractions, culture, and history.
            </p>
            <a href="/location" className="btn btn-warning fw-bold text-white">Jelajah</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero