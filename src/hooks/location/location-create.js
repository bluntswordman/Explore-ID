import axios from "axios";

const createLocation = async (location) => {
  const { title, description, newlat, newlng } = location;
  try {
    await axios.post("http://localhost:5000/v1/location", {
      title: title,
      description: description,
      img: "",
      lat: newlat,
      lng: newlng,
      name: 'Empty',
      userId: 'null',
    });
    return window.location.reload();
  } catch (error) {
    return error;
  }
}

export default createLocation;