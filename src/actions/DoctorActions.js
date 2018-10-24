import axios from "axios";

const FETCH_DOCTORS = "fetch_doctors";

export function DoctorsFetch() {
  const URL = "https://doc.aladinlabs.com/api/doctor";
  const token = localStorage.getItem("token");
  //console.log(token);
  const request = axios.get(URL, {
    // headers: { Authorization: `Bearer ${token}` }
  });

  console.log(request);
  return {
    type: FETCH_DOCTORS,
    payload: request
  };
}
