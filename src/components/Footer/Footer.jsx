import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <>
      <footer className="footer text-muted mt-5 pb-n3 ">
        <div className="container-fluid border-top">
          <div className="row">
            <div className="col-md-2">
              <h3 className="text-start mx-3">
                <a href="/" className="text-decoration-none title">Explore ID</a>
              </h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-sm-3">
              <p className="text-start mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
            </div>
            <div className="col d-flex flex-row justify-content-end align-items-end mb-1 ">
              <a href="/" className="px-1 text-decoration-none text-dark fw-bolder">Tentang Kami</a>
              <span className="px-1 fw-bold">|</span>
              <a href="/" className="px-1 text-decoration-none text-dark fw-bolder">Kontak Kami</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-start mx-3">© 2022 All Rights Reserved, Explore ID</p>
            </div>
            <div className="col d-flex flex-row justify-content-end">
              <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Icon icon="jam:facebook-square" color="#41436a" height="30" />
              </a>
              <a href="https://www.instagram.com/" className="px-1" target="_blank" rel="noopener noreferrer">
                <Icon icon="jam:instagram" color="#41436a" height="30" />
              </a>
              <a href="https://github.com/bluntswordman" className="px-1" target="_blank" rel="noopener noreferrer">
                <Icon icon="jam:github-square" color="#41436a" height="30" />
              </a>
              <a href="https://www.youtube.com/" className="px-1" target="_blank" rel="noopener noreferrer">
                <Icon icon="jam:youtube-square" color="#41436a" height="30" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer