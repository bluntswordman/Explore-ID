import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const loginUser = async (user) => {
  const { username, password } = user;
  
  try {
    await axios.post("http://localhost:5000/v1/user/login", {
      username: username,
      password: password, 
    },);
    return window.location.href = "/dashboard";
  }catch(error){
    return window.location.href = "/login";
  }
};