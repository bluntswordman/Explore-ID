import axios from "axios";
import Swal from "sweetalert2";

export const registerUser = async (user) => {
  const { name, username, password, confirmPassword } = user;
  
  try {
    const response = await axios.post('http://localhost:5000/v1/user', {
      name: name,
      username: username,
      password: password,
      confirmPassword : confirmPassword
    });
    let timerInterval;
    Swal.fire({
      icon: 'success',
      title: response.data.msg,
      showConfirmButton: false,
      timer: 1000,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
        window.location.href = "/login";
      }
    })
  }catch(error){
    return Swal.fire({
      title: error.response.data.msg,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
}