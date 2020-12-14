import {combineReducers} from "redux";
import {reducer as reduxForm} from "redux-form";
import crewReducer from "./crewReducer";

export default combineReducers({
    form:reduxForm,
    crew:crewReducer,
});