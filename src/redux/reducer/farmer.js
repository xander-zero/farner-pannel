export const farmerReducer = (state = { farmers: [], farmer: {} }, action) => {
  switch (action.type) {
    //   get all farmers
    case "GET_ALL_FARMERS":
      return {
        ...state,
        farmers: action.payload,
      };
    //   get detail farmer
    case "GET_DETAIL_FARMER":
      return {
        ...state,
        farmer: action.payload,
      };

    default:
      return state;
  }
};
