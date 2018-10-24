import { combineReducers } from "redux";
import { Field, reduxForm } from "redux-form";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: AuthReducer
});

export default rootReducer;
