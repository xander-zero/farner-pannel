// axios module for working with server
import axios from "axios";
// craete base url for other requests
import { API } from "./apiRequestInterface";
// get the user information
import { userData } from "../help/userData";
// sign in
export const singIn = (userData) =>
  axios.put("https://agrodayan.ir/api/expert/login", userData);
// logout
export const logOut = () =>
  axios.get("https://agrodayan.ir/api/employee/logout", {
    headers: {
      "access-token": userData()?.data?.result?.accessToken,
      "refresh-token": userData()?.data?.result?.refreshToken,
    },
  });
