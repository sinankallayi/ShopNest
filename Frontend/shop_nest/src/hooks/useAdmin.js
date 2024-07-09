import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "utils/auth";
import { base64Decode } from "utils/utils";

export const ACCESS_TOKEN = "AdToken"

export const useAdmin = () => {
  const [user, setUser] = useState(JSON.parse(base64Decode(getToken()?.split('.')[1])));
  const navigate = useNavigate()

  const removeUser = () => {
    setUser(null);
  };

  const login = (email, password) => {
    axios.post("http://localhost:5000/admin/login", { email: email, password: password }).then(response => {
      if (response.data) {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken)
        const token = response.data.accessToken
        extractUser(token)
        navigate('/dashboard')
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
    if (!window.confirm("ConfirmLogout")) return
    localStorage.removeItem(ACCESS_TOKEN)
    removeUser();
  };

  return { login, logout, user };
};