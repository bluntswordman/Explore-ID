import React from 'react';
import { aboutImage } from '../../assets/core'

const About = () => {
  return (
    <>
      <section id="tentang" class="about section">
        <div class="container" data-aos="fade-up">
          <div className=" section-title">
            <h2>Tentang Kami</h2>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img src={aboutImage} class="img-fluid" alt="foto tentang kami"/>
            </div>
            <div class="col-lg-6 text-center">
              <h3 className='fw-bold'>Explore ID</h3>
              <p class="fst-italic">Explore ID merupakan website untuk mempromosikan wisata lokal, dengan dibuatnya website ini pengembang berharap agar masyarakat setempat atau wisatawan yang datang lebih bisa bekerja sama untuk mempromosikan wisata lokal.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About