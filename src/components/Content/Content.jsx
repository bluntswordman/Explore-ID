/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { GetRefreshToken } from "../../hooks/token/refreshToken";
import './content.css';

const Content = () => {
  const { userId, accessJWT } = GetRefreshToken();
  const [showContent, setShowContent] = useState([]);

  useEffect(() => {
    const myContent = async () => {
      try {
        const res = await accessJWT.get(`http://localhost:5000/v1/location/locself/${userId}`);
        setShowContent(res.data);
      } catch (err) {
        console.error(err)
      }
    };
    myContent();
  }, [userId,accessJWT]);

  return (
    <>
      <section className="section dashboard">
        <div className="container">
          <h3>Postingan Saya</h3>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {showContent === [] || showContent === null ? console.log('no content') : showContent.map((item) => (
              <div className="col">
                <div className="card">
                  <img src={`http://localhost:5000/v1/${item.image}`} className="card-img-top img-content" alt={item.title}/>
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">{item.title}</h5>
                    <p className="card-text text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Content;