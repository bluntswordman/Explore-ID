import React, { useEffect, useState} from 'react'
import { img1, img2, img3, img4, img5 } from '../../assets/index.js'
import axios from 'axios'
import './Content.css'

const Content = () =>{
  const [data, setData] = useState([])
  const image = [img1, img2, img3, img4, img5];
  const randomImage = image[Math.floor(Math.random() * image.length)];
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/v1/location/random')
      setData(result.data)
    }
    fetchData()
  }, [])
  // console.log(data)

  return (
    <>
      <div className="container my-5">
        <div className="row m-4">
          <div className="col">
            <h1 className="text-center">Rekomendasi Tempat Wisata</h1>
          </div>
        </div>
        {/* <div className="card-group">
          {data.map(temp => (
            <div className="card border-0">
              <img src={randomImage} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
                <div className="card-body border rounded-3 mx-1 shadow-sm">
                  <h5 className="card-title">{temp.title}</h5>
                  <p className="card-text">{temp.decription}</p>
                  <p className="card-text"><small className="text-muted">{temp.author}</small></p>
                </div>
            </div>
          ))}
        </div> */}
        <div className="card-group my-4">
        <div className="card border-0">
          <img src={img2} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm">
            <h5 className="card-title">Pasar 16 Ilir</h5>
            <p className="card-text">Hiya HIya</p>
            <p className="card-text"><small className="text-muted">Kitou Akari</small></p>
          </div>
        </div>
        <div className="card border-0">
          <img src={img1} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm">
            <h5 className="card-title">Sungai Sekanak</h5>
            <p className="card-text">Hiya HIya</p>
            <p className="card-text"><small className="text-muted">Kitou Akari</small></p>
          </div>
        </div>
        <div className="card border-0">
          <img src={img3} className="card-img-top p-1 rounded-3 img-size" alt="..."/>
          <div className="card-body border rounded-3 mx-1 shadow-sm ">
            <h5 className="card-title">Pulau Kemaro</h5>
            <p className="card-text">Hiya HIya</p>
            <p className="card-text"><small className="text-muted">Kitou Akari</small></p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Content