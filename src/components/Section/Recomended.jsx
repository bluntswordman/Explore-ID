import React from "react";
import Swiper from 'swiper';
import AOS from 'aos';
import axios from "axios";
import { Pagination, Autoplay, Zoom } from "swiper";
import 'swiper/css';
import 'aos/dist/aos.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './section.css';

const Recomended = () => {
  const [content, setContent] = React.useState([]);
  const getContent = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/v1/location/random`);
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  window.addEventListener('load', () => {
    getContent();
    AOS.init({
      duration: 1000,
    });

    (new Swiper('.gallery-slider', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 400,
      loop: true,
      centeredSlides: true,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      },
      autoplay: {
        delay: 5000,
      },
      zoom: {
        enabled: true,
        maxRatio: 3,
        minRatio: 1,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
        toggle: true,
      },
      modules: [Pagination, Autoplay, Zoom],
    })); 

  });

  return (
    <>
      <section id="rekomendasi" className="gallery section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Rekomendasi Tempat Wisata</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>       
          <div className="gallery-slider swiper">
            <div className="swiper-wrapper align-items-center">
              {content.map((item) => {
                return (
                  <>
                    <div className="swiper-slide">
                      <div className="swiper-zoom-container" data-swiper-zoom="5">
                        <img src={`http://localhost:5000/v1/${item.image}`} alt={item.title}/>
                      </div>
                      <strong>{item.title}</strong>
                      <p>by '{item.name}'</p>
                      <div className="swiper-slide-zoomed"></div>
                    </div>
                  </>
                )
              })}
            </div> 
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Recomended;