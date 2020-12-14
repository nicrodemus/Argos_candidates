import {FETCH_ALL_CREW,DELETE_CANDIDATE} from "../actions/types";
const initialState = {
    crew:[],
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_CREW:
            return {...state,
            crew:[...action.payload] || false};
            case DELETE_CANDIDATE :
                return{
                    ...state,
                    crew: state.crew.filter(crew =>crew._id !== action.payload)
                }
            default:
                return state
    }
}