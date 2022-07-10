import * as api from "../../service/myFarmer";
import { errorMessage, successMessage } from "../../utils/message";

// get all farmers
export const allFarmers =
  (expertCode, fullName, phone, province, city, pid, marked) =>
  async (dispatch) => {
    try {
      const { data } = await api.getAllFarmer(
        expertCode,
        fullName,
        phone,
        province,
        city,
        pid,
        marked
      );
      const result = data?.data?.result;
      dispatch({ type: "GET_ALL_FARMERS", payload: result });
    } catch (error) {
      errorMessage("some thing wrong");
    }
  };

// get detail farmer
export const detailFarmer = (farmerCode) => async (dispatch) => {
  try {
    const { data } = await api.getDetailFarmer(farmerCode);
    const result = data?.data?.result;
    dispatch({ type: "GET_DETAIL_FARMER", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// assign farmer to expert
export const assignFarmer = (data) => async (dispatch) => {
  try {
    const { data } = await api.addAssignFarmer(data);
    console.log(data);
    dispatch({ type: "ASSIGN_FARMER" });
    successMessage("کشاورز با موفقیت تعیین شد");
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const sendFileContent = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch({ type: "ADD_FILE_CONTENT_LOADING" });
    const { data } = await api.addFileContent(formData);
    dispatch({ type: "ADD_FILE_CONTENT" });
    successMessage("با موفقیت اضافه شد");
    dispatch({ type: "ADD_FILE_CONTENT_DONE" });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const sendVideoContent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_VIDEO_CONTENT_LOADING" });
    const { data } = await api.addVideoContent(formData);
    dispatch({ type: "ADD_VIDEO_CONTENT" });
    successMessage("با موفقیت اضافه شد");
    dispatch({ type: "ADD_VIDEO_CONTENT_DONE" });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count farmer
export const gettingCountFarmer = () => async (dispatch) => {
  try {
    const { data } = await api.getCountFarmer();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_FARMER", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count mealplan
export const gettingCountMealplan = () => async (dispatch) => {
  try {
    const { data } = await api.getCountMealplan();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_MEALPLAN", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// get count visit
export const gettingCountVisit = () => async (dispatch) => {
  try {
    const { data } = await api.getCountVisit();
    const result = data?.data?.result;
    dispatch({ type: "COUNT_VISIT", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

// search farmers
export const getSearchFarmers = (name) => async (dispatch) => {
  // console.log(key, value);
  try {
    const { data } = await api.searchFarmers(name);
    const result = data?.data?.result;
    dispatch({ type: "SEARCH_FARMERS", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const addCommentToFarmer = (data, expertCode) => async (dispatch) => {
  try {
    await api.addComment(data, expertCode);
    dispatch({ type: "ADD_COMMENT_TO_FARMER" });
    dispatch(allFarmers(expertCode));
    successMessage("با موفقیت ارسال شد");
  } catch (error) {}
};
