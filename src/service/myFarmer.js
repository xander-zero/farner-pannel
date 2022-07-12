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
    `http://185.81.99.8:88/api/expert/get/farmers?expertCode=${expertCode}&fullName=${
      fullName || ""
    }&phoneNumber=${phone || ""}&province=${province || ""}&city=${
      city || ""
    }&pid=${pid || ""}&marked=${marked || ""}`
  );

// get detail farmer
export const getDetailFarmer = (farmerCode) =>
  API.get(`http://185.81.99.8:88/api/farmer/data?farmerCode=${farmerCode}`);

// assign farmer to expert
export const addAssignFarmer = (data) => API.post("/expert/farmer", data);
// get province
export const getProvince = () => API.get("https://agrodayan.ir/api/provinces");
// get cities
export const getCities = () => API.get("https://agrodayan.ir/api/cities");
// get products
export const getProducts = () => API.get("https://agrodayan.ir/api/products");
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
