// axios module for working with server
import axios from "axios";
// get the user information
import { userData } from "../help/userData";
// sign in
export const singIn = (userData) =>
  axios.put("http://panel.agroiranexpert.com/api/expert/login", userData);
// logout
export const logOut = () =>
  axios.get("http://panel.agroiranexpert.com/api/employee/logout", {
    headers: {
      "access-token": userData()?.data?.result?.accessToken,
      "refresh-token": userData()?.data?.result?.refreshToken,
    },
  });
