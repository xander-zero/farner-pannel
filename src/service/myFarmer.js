import { API } from "./apiRequestInterface";

// get all farmer
export const getAllFarmer = () =>
  API.get(`/expert/get/farmers?expertCode=ESEHO907951`);

// get detail farmer
export const getDetailFarmer = (farmerCode) =>
  API.get(`/expert/get/farmer?farmerCode=${farmerCode}`);

// assign farmer to expert
export const addAssignFarmer = (data) => API.post("/expert/farmer", data);
// get province
export const getProvince = () => API.get("/provinces");
// get cities
export const getCities = () => API.get("/cities");
