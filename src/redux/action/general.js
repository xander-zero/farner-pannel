import * as api from "../../service/myFarmer";
import { errorMessage } from "../../utils/message";

export const allProvinces = () => async (dispatch) => {
  try {
    const { data } = await api.getProvince();
    const result = data?.data?.result;
    dispatch({ type: "GET_PROVINCE", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};

export const allCities = () => async (dispatch) => {
  try {
    const { data } = await api.getCities();
    const result = data?.data?.result;
    dispatch({ type: "GET_CITIES", payload: result });
  } catch (error) {
    errorMessage("some thing wrong");
  }
};
