import {ADD_MEMBER} from "../actions/types";
export default function (state = null,action){
    switch (action.type) {
        case ADD_MEMBER:
          return action.payload || false;
        default:
          return state;
      }
}