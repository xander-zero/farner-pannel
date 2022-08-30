export const authReducer = (
  state = { authData: {}, validation: false },
  action
) => {
  switch (action.type) {
    //   validation user
    case "VALIDATION_USER":
      return {
        ...state,
        validation: true,
      };

    // loading sing in
    case "SIGN_IN_LOADING":
      return {
        ...state,
        loading: true,
      };

    // sing in user
    case "SIGN_IN_DONE":
      return {
        ...state,
        validation: true,
        authData: action.payload,
      };
    case "SIGN_IN_FAILED":
        return {
          ...state,
          loading: false,
        };
    // Logout
    case "LOG_OUT":
      return {
        validation: false,
        authData: {},
      };

    //   return default state
    default:
      return state;
  }
};
