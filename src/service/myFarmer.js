import axios from "axios";
import { API } from "./apiRequestInterface";

// get all farmer
export const getAllFarmer = (
  expertCode,
  fullName,
  phone,
  province,
  city,
  pid,
  marked
) =>
  API.get(
    `http://panel.agroiranexpert.com/api/expert/get/farmers?expertCode=${expertCode}&fullName=${
      fullName || ""
    }&phoneNumber=${phone || ""}&province=${province || ""}&city=${
      city || ""
    }&pid=${pid || ""}&marked=${marked || ""}`
  );

// get detail farmer
export const getDetailFarmer = (farmerCode) =>
  API.get(
    `http://panel.agroiranexpert.com/api/farmer/data?farmerCode=${farmerCode}`
  );

// assign farmer to expert
export const addAssignFarmer = (data) => API.post("/expert/farmer", data);
// get province
export const getProvince = () =>
  axios.get("https://agrodayan.ir/api/provinces");
// get cities
export const getCities = () => axios.get("https://agrodayan.ir/api/cities");
// get products
export const getProducts = () => axios.get("https://agrodayan.ir/api/products");
// add files content management farmer
export const addFileContent = (formData) => API.post("/file/content", formData);
// add video content management farmer
export const addVideoContent = (formData) => API.post("/file/video", formData);
// get cout farmer
export const getCountFarmer = () => API.get("/me/farmer/count");
// get count meal plan
export const getCountMealplan = () => API.get("/me/mealPlan/count");
// get count vitist
export const getCountVisit = () => API.get("/me/visits/count");
// search farmer
export const searchFarmers = (fullName) =>
  API.get(`/expert/get/farmers?expertCode=ESEHO907951&fullName=${fullName}`);
// add comment
export const addComment = (data, farmerCode) =>
  API.put(`/expert/farmer?farmerCode=${farmerCode}`, data);
// get questionnaire more
export const getMoreQuestionnaire = (farmerCode) =>
  API.get(`/farmer/data/questionnaires/features?farmerCode=${farmerCode}`);
// get mealplan more
export const getMoreMealplan = (farmerCode) =>
  API.get(`/farmer/data/mealPlans/features?farmerCode=${farmerCode}`);
// get visit more
export const getMoreVisit = (farmerCode) =>
  API.get(`/farmer/data/visits/features?farmerCode=${farmerCode}`);
// export const sort farmer
export const sortAllFarmer = (expertCode, sortMeal, sortArea) =>
  API.get(
    `http://185.81.99.8:88/api/expert/get/farmers?expertCode=${expertCode}&mealPlan=${
      sortMeal ? sortMeal : ""
    }&area=${sortArea ? sortArea : ""}`
  );
export const sendIfno = (information) =>
  API.post("/expert/carriers", information);

// get content
export const getAllContent = () => API.get("/expert/sills");

// get single content
export const singleContent = (sid) => API.get(`/expert/sills?sid=${sid}`);

// get info expert
export const getInfoExpert = (expertCode) =>
  API.get(`/expert?expertCode=${expertCode}`);

// confirm content
export const confirmedContent = (sid) => API.put(`/expert/skills?sid=${sid}`);

// delete content
export const deleteContent = (sid) => API.delete(`/expert/skills?sid=${sid}`);

export const getAllCarriers = () => API.get("/expert/carriers");

export const updateCarrier = (carrierData, sid) =>
  API.put(`/expert/carriers?sid=${sid}`, carrierData);

export const deleteImage = (id) => API.delete(`/expert/carrier?id=${id}`);

export const deleteCarrier = (sid) => API.delete(`/expert/carrier?sid=${sid}`);
