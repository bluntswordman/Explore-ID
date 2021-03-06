import { GetRefreshToken } from "../token/refreshToken";

export const useLogOutUser = () => {
  const { token, accessJWT } = GetRefreshToken();

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

  const logOutUser = async () => {
    try {
      const response = await accessJWT.delete('http://localhost:5000/v1/user/logout', config);
      console.log(response.data.msg);
      return window.location.href = "/login";
    } catch (error) {
      console.log(error.response.data.msg);
      return window.location.href = "/login";
    }
  }

  return { logOutUser };
}