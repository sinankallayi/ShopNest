import axios from "axios";
import { AuthContext } from "context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base64Decode } from "utils/utils";
import { ACCESS_TOKEN as adminToken} from "./useAdmin";

export const ACCESS_TOKEN = "UserToken"

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const removeUser = () => {
    setUser(null);
  };

  const login = (email, password) => {
    axios.post("http://localhost:5000/login", { email: email, password: password }).then(response => {
      if (response.data) {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken)
        const token = response.data.accessToken
        extractUser(token)
        navigate('/')
      } else {
        toast(response.data.message)
      }
    }).catch(e => {
      toast.error(e.response?.data?.message)
    })
  };


  const extractUser = (token) => {
    const decodeToken = JSON.parse(base64Decode(token.split('.')[1]))
    setUser(decodeToken)
  }

  const logout = () => {
    if (!window.confirm("Confirm Logout")) return
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(adminToken)
    localStorage.removeItem('cart')
    removeUser();
  };

  return { login, logout, user };
};