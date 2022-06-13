import axios from "axios";
import Swal from "sweetalert2";

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
    return Swal.fire({
      title: error.response.data.msg,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
}