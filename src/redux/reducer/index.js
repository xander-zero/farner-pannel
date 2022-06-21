import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { farmerReducer } from "./farmer";
import { generalReducer } from "./general";

export const reducer = combineReducers({
  auth: authReducer,
  myFarmer: farmerReducer,
  general: generalReducer,
});
