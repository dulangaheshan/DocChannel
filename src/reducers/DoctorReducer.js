const FETCH_DOCTORS = "fetch_doctors";

import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DOCTORS:
      console.log([action.payload.data.id]);
      // console.log(action.payload.data);
      console.log(action.payload.data);

      return action.payload.data;
  }

  return state;
}
