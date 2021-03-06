import React, { useState } from 'react';
import { person1, person2, person3, person4 } from '../../assets/core';
import { Icon } from '@iconify/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './section.css';

const OurTeam = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <>
      <section id="team" className="teams section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Tim Pengembang</h2>
            <p>Kami adalah Team CPSG-65 program Kampus Merdeka Studi Independen Bersertifikat <strong>X</strong> Dicoding</p>
          </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <LazyLoadImage
                  alt="foto-Iqbal-Febren-Haryanto"
                  className="img-fluid"
                  effect="blur"
                  src={person2}
                />
                <div className="social">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:instagram"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:linkedin-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover1 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:facebook-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover2 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                    />
                  </a>
                  <a href="https://github.com/iqbalfebrenh23" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:github-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover3 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover3(true)}
                      onMouseLeave={() => setHover3(false)}
                    />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Iqbal Febren Haryanto</h4>
                <span>Universitas Muhammadiyah Riau</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <LazyLoadImage
                  alt="foto-bedy-briliant-wijaya"
                  className="img-fluid"
                  effect="blur"
                  src={person1}
                />
                <div className="social">
                  <a href="https://www.instagram.com/_brln.by/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:instagram"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/bedy-b-wijaya/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:linkedin-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover1 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}
                    />
                  </a>
                  <a href="https://web.facebook.com/bluntswordman/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:facebook-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover2 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                    />
                  </a>
                  <a href="https://github.com/bluntswordman" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:github-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover3 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover3(true)}
                      onMouseLeave={() => setHover3(false)}
                    />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Bedy Briliant Wijaya</h4>
                <span>Universitas Indo Global Mandiri</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <LazyLoadImage
                  alt="foto-Rizky-Aprianto-Putra"
                  className="img-fluid"
                  effect="blur"
                  src={person3}
                />
                <div className="social">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:instagram"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:linkedin-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover1 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:facebook-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover2 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                    />
                  </a>
                  <a href="https://github.com/RizkyAprianto" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:github-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover3 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover3(true)}
                      onMouseLeave={() => setHover3(false)}
                    />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Rizky Aprianto Putra</h4>
                <span>Universitas Muhammadiyah Surabaya</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <LazyLoadImage
                    alt="foto-Rahmatulah"
                    className="img-fluid"
                    effect="blur"
                    src={person4}
                />
                <div className="social">
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:instagram"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:linkedin-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover1 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}
                    />
                  </a>
                  <a href="/" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:facebook-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover2 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                    />
                  </a>
                  <a href="https://github.com/Rhmt1" rel="noopener noreferrer" target="_blank">
                    <Icon 
                      icon="jam:github-square"
                      height="30"
                      style={{transition: '0.6s'}}
                      color={hover3 ? '#57bee6' : '#555555'} 
                      onMouseEnter={() => setHover3(true)}
                      onMouseLeave={() => setHover3(false)}
                    />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Rahmatulah</h4>
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OurTeam