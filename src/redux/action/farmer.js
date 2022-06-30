import * as api from "../../service/myFarmer";
import { errorMessage, successMessage } from "../../utils/message";

// get all farmers
export const allFarmers = (expertCode) => async (dispatch) => {
  try {
    const { data } = await api.getAllFarmer(expertCode);
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
    const { data } = await api.addFileContent(formData);
    dispatch({ type: "ADD_FILE_CONTENT" });
    successMessage("با موفقیت اضافه شد");
  } catch (error) {
    errorMessage("some thing wrong");
  }
};
