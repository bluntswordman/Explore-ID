import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const GetRefreshToken = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expired, setExpired] = useState('');

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/v1/token/access');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
      setName(decoded.name);
      setExpired(decoded.exp);
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response.status === 401) {
        return window.location.href = "/login";
      }
    }
  }

  const accessJWT = axios.create();
  
  accessJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if (expired * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/v1/token/access');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUserId(decoded.userId);
      setExpired(decoded.exp);
    }
    return config;
    
  }, (error) => {
    return Promise.reject(error);
  });

  return {
    userId,
    name,
    token,
    accessJWT,
  }
}