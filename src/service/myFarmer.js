import { API } from "./apiRequestInterface";

// get all farmer
export const getAllFarmer = (expertCode) =>
  API.get(
    `http://185.81.99.8:88/api/expert/get/farmers?expertCode=${expertCode}`
  );

// get detail farmer
export const getDetailFarmer = (farmerCode) =>
  API.get(`http://185.81.99.8:88/api/farmer/data?farmerCode=${farmerCode}`);

// assign farmer to expert
export const addAssignFarmer = (data) => API.post("/expert/farmer", data);
// get province
export const getProvince = () => API.get("/provinces");
// get cities
export const getCities = () => API.get("/cities");
// get products
export const getProducts = () => API.get("/products");
