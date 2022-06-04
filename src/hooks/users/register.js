import axios from "axios";

export const registerUser = async (user) => {
  const { name, username, password, confirmPassword } = user;
  
  try {
    await axios.post('http://localhost:5000/v1/user', {
      name: name,
      username: username,
      password: password,
      confirmPassword : confirmPassword
    });
    return window.location.href = "/login";
  }catch(error){
    return error;
  }
}