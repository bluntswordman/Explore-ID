import axios from "axios";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

export const loginUser = async (user) => {
  const { username, password } = user;
  
  try {
    await axios.post("http://localhost:5000/v1/user/login", {
      username: username,
      password: password, 
    },);
    let timerInterval;
    Swal.fire({
      icon: 'success',
      title: 'Anda berhasil masuk',
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
        window.location.href = "/dashboard";
      }
    })
  }catch(error){
    return Swal.fire({
      title: error.response.data.msg,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};