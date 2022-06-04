/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/index.js';
import { Collapse } from 'bootstrap';
import mapboxgl from 'mapbox-gl';
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
  const [location, setLocation] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (map.current) return;
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    map.current.on('load', () => {
      map.current.resize();
      map.current.addControl(new mapboxgl.NavigationControl());
      map.current.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));
      map.current.addControl(new mapboxgl.FullscreenControl());
      map.current.addControl(new mapboxgl.ScaleControl());
      map.current.addControl(new mapboxgl.Geocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      }));
      map.current.addControl(new mapboxgl.Marker({
        draggable: true,
        color: '#ff0000',
        drag: (e) => {
          setLng(e.target._lngLat.lng);
          setLat(e.target._lngLat.lat);
        }
      }).setLngLat([lng, lat]).addTo(map.current));
    });
    
    if (!map.current) return;
    map.current.on('click', (e) => {
      setLng(e.lngLat.lng);
      setLat(e.lngLat.lat);
      return console.log(e.lngLat.lng, e.lngLat.lat);
    });

    location.map(loc => {
      const el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new mapboxgl.Popup({ closeOnClick: true }, el)
          .setHTML(`
            <img src="https://images.unsplash.com/photo-1528931345244-228afd762769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="${loc.title}" class="image-popup"/>
            <h3 >${loc.title}</h3>
            <p>${loc.description}</p>
            <button class="btn btn-primary" onClick="window.location.href='/location/${loc.id}'">View</button>`))
        .addTo(map.current);

      // el.addEventListener('click', () => {
      //   const canvas = document.createElement('div');
      //   canvas.className = 'canvas';
      //   canvas.innerHTML = `
      //     <div class="card">
      //       <div class="card-body">
      //         <h5 class="card-title">${loc.title}</h5>
      //         <p class="card-text">${loc.description}</p>
      //         <a href="#" class="btn btn-primary">Go somewhere</a>
      //       </div>
      //     </div>
      //   `;  // eslint-disable-line
      //   map.current.getCanvas().style.cursor = 'default';
      //   new mapboxgl.Popup()
      //     .setLngLat([loc.lng, loc.lat])
      //     .setDOMContent(canvas)
      //     .addTo(map.current);
      // });
    });
  }, [location]);
  
  useEffect(() => {
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
    const getLocation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/v1/location/');
        setLocation(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error(err)
      }
    }

    createLocation(); 
    getLocation();
  }, []);
  
  return (
    <> 
      <Navigation />
      <div>
        <div ref={mapContainer} className="map-container"/>
      </div>
    </>
  );
};

export default Location;