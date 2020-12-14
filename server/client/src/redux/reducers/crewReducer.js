import {FETCH_ALL_CREW} from "../actions/types";
const initialState = {
    crew:[],
}
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_CREW:
            return {...state,
            crew:[...action.payload] || false}
            default:
                return state
    }
}