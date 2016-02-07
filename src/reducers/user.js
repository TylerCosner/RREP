import {USER_LOGIN} from "../constants/user"

const initialState ={
	name: ""
};
console.log("Test3");
function user(state = initialState, action) {  
	switch (action.type) {
		case USER_LOGIN:
			console.log("Test2");
			return {name: action.name};
		default: 
			return state
		}
	}
}

export default user