/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRefreshToken } from "../token/refreshToken";

export const useProfile = () => {
  const { userId, token, accessJWT } = useRefreshToken();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    getProfile(userId);
  },[userId]);
  
  const getProfile = async (id) => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try {
      // console.log(userId);
      const response = await accessJWT.get(`http://localhost:5000/v1/user/${id}`, config);
      // console.log(userId);
      // console.log(response.data);
      setName(response.data.name);
      setUsername(response.data.username);
    } catch (error) {
      // console.log(error.response);
      if (error.response.status === 401) {
        return window.location.href = "/login";
      }
    }
  }

  return { name, username };
};
