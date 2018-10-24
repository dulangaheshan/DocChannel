const LOGIN_SUCESS = "login_sucess";
const LOGIN_FAILED = "login_failed";
const ADMIN_LOGIN = "admin_login";

const INITIAL_STATE = {
  user: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case ADMIN_LOGIN: {
      console.log(action.type + action.payload);
      return { ...state, loading: true, error: "" };
    }
    case LOGIN_SUCESS:
      console.log(action.payload.data);
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_FAILED:
      return { ...state, error: "INCORRECT EMAIL OR PASSWORD", loading: false };
  }
  return state;
};

/// have to fix user undefined
