import React from 'react'
import { img1, img2, img3, img4, img5 } from '../../assets/index.js'


const Location = () => {
  const image = {img1, img2, img3, img4, img5};
  const randomImage = image[Math.floor(Math.random() * image.length)];

  return (
    <div className='container my-5'>
      <h2 className='text-start'>Postingan Saya</h2>
      <div className="card-group my-4">
        <div className="card border-0">
          <img src={img5} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm">
            <h5 className="card-title">Park Sako</h5>
            <p className="card-text">Hiya HIya</p>
          </div>
        </div>
        <div className="card border-0">
          <img src={img1} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm">
            <h5 className="card-title">Park Sako</h5>
            <p className="card-text">Hiya HIya</p>
          </div>
        </div>
        <div className="card border-0">
          <img src={img4} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm ">
            <h5 className="card-title">Park Sako</h5>
            <p className="card-text">Hiya HIya</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location