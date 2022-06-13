import axios from 'axios';

const deleteLocation = async (location) => {
  const id = location;

  try {
    await axios.delete(`http://localhost:5000/v1/location/${id}`);
    return window.location.reload();
  } catch (err) {
    console.error(err);
  }
}

export default deleteLocation;