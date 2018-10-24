import axios from "axios";
const ADMIN_LOGIN = "admin_login";
const LOGIN_SUCESS = "login_sucess";
const LOGIN_FAILED = "login_failed";

const ROOT_URL = "https://doc.aladinlabs.com/api/";

export function LoginAction(values, callback) {
  console.log(values);
  const body = {
    grant_type: "password",
    client_id: "2",
    client_secret: "BOnQLGBTkjSTYNKjzeKeBSYovpFwezSVBVdR4OiS",
    username: values.email,
    password: values.password
  };
  console.log(body);
  return dispatch => {
    dispatch({ type: ADMIN_LOGIN });
    axios
      .post(`${ROOT_URL}oauth/token`, body)
      .then(response => {
        if (response.status == 200) {
          //console.log(response.data);
          const data = response.data;

          loginSucess(dispatch, data);
        } else {
          loginFailed(dispatch);
        }
      })
      .then(() => callback())
      .catch(() => loginFailed(dispatch));
  };
}

const loginSucess = (dispatch, data) => {
  //localStorage.set("token", data.access_token);
  localStorage.setItem("token", data.access_token);
  //localStorage.get('itemName')
  //console.log(data);
  //console.log(localStorage.get("token"));
  var jwtDecode = require("jwt-decode");
  var decoded = jwtDecode(data.access_token);
  //var user = decoded.sub;
  dispatch({
    type: LOGIN_SUCESS,
    payload: data.access_token
  });
};

const loginFailed = dispatch => {
  console.log("fgcgh");
  dispatch({ type: LOGIN_FAILED });
};
