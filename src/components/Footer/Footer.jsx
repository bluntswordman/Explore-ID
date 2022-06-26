import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h3><a href="/">Explore ID</a></h3>
                <p>Explore ID merupakan website untuk mempromosikan wisata lokal, dengan dibuatnya website ini pengembang berharap agar masyarakat setempat atau wisatawan yang datang lebih bisa bekerja sama untuk mempromosikan wisata lokal.</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/bluntswordman" target="_blank" rel="noopener noreferrer"><Icon icon="ant-design:github-outlined" color="#57bee6" height="30" /></a>
              <a href="https://www.linkedin.com/in/bedy-b-wijaya/" target="_blank" rel="noopener noreferrer"><Icon icon="entypo-social:linkedin-with-circle" color="#57bee6" height="29" /></a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>Explore ID</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      <Icon
        type='button'
        className='back-to-top'
        icon="codicon:arrow-circle-up" 
        height="50"
        color={hover ? '#57bee6' : '#3D424A'}
        onClick={scrollToTop} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: visible ? 'inline' : 'none', 
        }}
      />
    </>
  )
};

export default Footer;
