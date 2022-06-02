/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Collapse } from 'bootstrap';
import mapboxgl from 'mapbox-gl';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Location.css';

const token = process.env.REACT_APP_MAPBOX_TOKEN;
mapboxgl.accessToken = token;

function Location() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(104.756554);
  const [lat, setLat] = useState(-2.990934);
  const [zoom, setZoom] = useState(11);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [toggle, setToggle] = useState(false)
  const collapseRef = useRef()

  const navigate = useNavigate();
  
  useEffect(() => {
    if (map.current) return;
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return;
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    const myCollapse = collapseRef.current;
    const bsCollapse = new Collapse(myCollapse, {toggle: false});
    toggle ? bsCollapse.show() : bsCollapse.hide();
    if (!map.current) return;
    map.current.on('click', (e) => {
      const lng = e.lngLat.lng;
      const lat = e.lngLat.lat;
      setToggle(!toggle);
      setLng(lng);
      setLat(lat);
      console.log(lng, lat);
    });
  });

  useEffect(() => {
    createLocation();
  }, []);

  const createLocation = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/v1/location/', {
        author: author,
        title: title,
        description: description,
        lat: lat,
        lng: lng
      })
      navigate('/location')
    } catch (err) {
      console.error(err)
    }
  }

  
  return (
    <>
      <div>
        <div className="collapse" ref={collapseRef}>
            This is the toggle-able content!
        </div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container"/>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" ref={collapseRef}>
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasExampleLabel">Buat Lokasi wisata Baru</h3>
          <button type="button" className="btn-close" onClick={() => setToggle(toggle => !toggle)}></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={createLocation}>
            <div className="form-group">
              <label for="author">Author</label>
              <input type="text" className="form-control" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} autoComplete="off"/>
            </div>
            <div className="form-group">
              <label for="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off"/>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} autoComplete="off"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => setToggle(toggle => !toggle)}>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Location;