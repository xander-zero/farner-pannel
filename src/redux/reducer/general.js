export const generalReducer = (
  state = { provinces: [], cities: [], products: [] },
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
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
