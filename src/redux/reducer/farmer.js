export const farmerReducer = (
  state = { farmers: [], farmer: {}, contents: [], content: {}, carriers: [] },
  action
) => {
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
        loadingVideo: true,
      };
    case "ADD_VIDEO_CONTENT":
      return {
        ...state,
      };
    case "ADD_VIDEO_CONTENT_DONE":
      return {
        ...state,
        loadingVideo: false,
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

    // case
    case "ADD_COMMENT_TO_FARMER":
      return {
        ...state,
      };

    // get more questionnaire
    case "ALL_QUESTIONNAIRE":
      return {
        ...state,
        questionnaires: action.payload,
      };

    case "ALL_MEALPLAN":
      return {
        ...state,
        mealplans: action.payload,
      };

    case "ALL_VISIT":
      return {
        ...state,
        visits: action.payload,
      };
    case "SORT_FARMER":
      return {
        ...state,
        farmers: action.payload,
      };

    // add information
    case "SEND_INFORMATION_LOADING":
      return {
        ...state,
        loadingSendInfo: true,
      };
    case "SEND_INFORMATION":
      return {
        ...state,
      };
    case "SEND_INFORMATION_LOADING_RESET":
      return {
        ...state,
        loadingSendInfo: false,
      };
    // get content
    case "GET_ALL_CONTENT":
      return {
        ...state,
        contents: action.payload,
      };

    // get detail single content
    case "GET_SINGLE_CONTENT":
      return {
        ...state,
        content: action.payload,
      };

    // get information expert
    case "GET_INFORMATION_EXPERT":
      return {
        ...state,
        expertInfo: action.payload,
      };

    // confirm content
    case "CONFIRM_CONTENT":
      return {
        ...state,
      };

    // delete content
    case "DELETE_CONTENT":
      return {
        ...state,
        contents: state.contents?.filter(
          (content) => content?.sid !== action.payload
        ),
      };

    case "GET_ALL_CARRIERS":
      return {
        ...state,
        carriers: action.payload,
      };

    case "UPDATE_CARRIER_LOADING":
      return {
        ...state,
        loadingUpdateCarrier: true,
      };

    case "UPDATE_CARRIER":
      return {
        ...state,
        carriers: state.carriers?.map((carrier) =>
          carrier?.sid === action?.payload?.sid ? action.payload : carrier
        ),
      };

    case "RESET_UPDATE_CARRIER_LOADING":
      return {
        ...state,
        loadingUpdateCarrier: false,
      };

    default:
      return state;
  }
};
