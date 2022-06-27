import React from 'react';
import { Icon } from '@iconify/react';
import './section.css';

const Contact = () => {
  return (
    <>
      <section id="kontak" className="contact section">
        <div className="container" data-aos="fade-up">
          <div className=" section-title">
            <h2>Kontak Kami</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <Icon icon="codicon:location" color="#57bee6" height="36" />
                    <h3>Alamat</h3>
                    <p>Jl. Jend. Sudirman No.Km.4 No. 62, 20 Ilir D. IV, Kec. Ilir Tim. I, Kota Palembang, Sumatera Selatan 30129</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <Icon icon="carbon:email" color="#57bee6" height="33" />
                    <h3>Email</h3>
                    <p>2019110015@students.uigm.ac.id</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <Icon icon="bx:phone-call" color="#57bee6" height="33" />
                    <h3>Telepon</h3>
                    <p>+62 895 0835 0276</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Masukan Nama Anda" required/>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Masukan Email Anda" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="Subjek" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Pesan" required></textarea>
                </div>
                <div className="text-center mt-3"><button type="submit">Kirim Pesan</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact