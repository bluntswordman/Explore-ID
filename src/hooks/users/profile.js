// /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { GetRefreshToken } from "../token/refreshToken";

export const Personal = () => {
  const { userId, token, accessJWT } = GetRefreshToken();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [veryfiId, setVeryfiId] = useState('');

  useEffect(() => {
    getProfile(userId);
  });

  
  
  const getProfile = async (id) => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    
    try {
      const response = await accessJWT.get(`http://localhost:5000/v1/user/${id}`, config);
      setName(response.data.name);
      setUsername(response.data.username);
      setVeryfiId(response.data.id);
    } catch (error) {
      if (error.response.status === 401) {
        return window.location.href = "/login";
      }
    }
  }

  return { name, username, veryfiId };
};
