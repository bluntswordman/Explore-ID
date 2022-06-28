import React from 'react';
import { aboutImage } from '../../assets/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <>
      <section id="tentang" className="about section">
        <div className="container" data-aos="fade-up">
          <div className=" section-title">
            <h2>Tentang Kami</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <LazyLoadImage
                alt="foto tentang kami"
                className="img-fluid"
                effect="blur"
                delayTime={300}
                src={aboutImage}
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3 className='fw-bold'>Explore ID</h3>
              <p className="fst-italic">Explore ID merupakan website untuk mempromosikan wisata lokal, dengan dibuatnya website ini pengembang berharap agar masyarakat setempat atau wisatawan yang datang lebih bisa bekerja sama untuk mempromosikan wisata lokal.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About