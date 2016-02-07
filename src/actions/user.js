import {USER_LOGIN} from "../constants/user";

export function userLogin(){
  console.log("test1");
  return {
    type: USER_LOGIN,
    name: "Tyler"
  };
};
