import axios from "axios";

const updateLocation = async (location) => {
  const { id, newTitle, newDescription } = location;
  try {
    await axios.put(`http://localhost:5000/v1/location/${id}`, {
      title: newTitle,
      description: newDescription
    });
    return window.location.reload();
  } catch (err) {
    console.error(err);
  }
}

export default updateLocation;