export const generalReducer = (
  state = { provinces: [], cities: [] },
  action
) => {
  switch (action.type) {
    case "GET_PROVINCE":
      return {
        ...state,
        provinces: action.payload,
      };
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};
