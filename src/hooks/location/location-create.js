const createLocation = async (location) => {
  const { title, description, images, newlat, newlng, name, userId, token, accessJWT } = location;

  let formData = new FormData();
  formData.append('photo', images);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('lat', newlat);
  formData.append('lng', newlng);
  formData.append('name', name);
  formData.append('userId', userId);

  await accessJWT("http://localhost:5000/v1/location", {
        method: "POST",
        data: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          },})
        .then((res) => {
          window.location.reload();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
}

export default createLocation;