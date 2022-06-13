const updateLocation = async (location) => {
  const { id, newTitle, newDescription, name, token, accessJWT  } = location;

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  try {
    await accessJWT.put(`http://localhost:5000/v1/location/${id}`, {
      title: newTitle,
      description: newDescription,
      name: name
    }, config);
    return window.location.reload();
  } catch (err) {
    console.error(err);
  }
}

export default updateLocation;