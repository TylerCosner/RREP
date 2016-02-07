import {USER_LOGIN} from "../constants/user";

const initialState = {
  name: ""
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {name: action.name};
    default: 
      return state;
  }
}

export default user;
