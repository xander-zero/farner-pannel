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
    case "ADD_FILE_CONTENT_LOADING":
      return {
        ...state,
        loadingFile: true,
      };
    case "ADD_FILE_CONTENT":
      return {
        ...state,
      };
    case "ADD_FILE_CONTENT_DONE":
      return {
        ...state,
        loadingFile: false,
      };

    //
    case "ADD_VIDEO_CONTENT_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_VIDEO_CONTENT":
      return {
        ...state,
      };
    case "ADD_VIDEO_CONTENT_DONE":
      return {
        ...state,
        loading: false,
      };

    // count farmer
    case "COUNT_FARMER":
      return {
        ...state,
        countFarmer: action.payload,
      };

    case "COUNT_MEALPLAN":
      return {
        ...state,
        countMealplan: action.payload,
      };

    case "COUNT_VISIT":
      return {
        ...state,
        countVisit: action.payload,
      };

    // search farmers
    case "SEARCH_FARMERS":
      return {
        ...state,
        farmers: action.payload,
      };
    default:
      return state;
  }
};
