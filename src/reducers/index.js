import { combineReducers } from "redux";
import { Field, reduxForm } from "redux-form";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import DoctorReducer from "./DoctorReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  doctor: DoctorReducer
});

export default rootReducer;
