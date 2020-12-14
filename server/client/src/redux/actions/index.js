import axios from "axios";
import {ADD_MEMBER,FETCH_ALL_CREW} from "./types";

export const submitForm =(values,history) =>async dispatch =>{
    console.log( "helo,,,,,",values)
    try{
        const res = await axios.post('/api/candidates',values);
        console.log(res);
        dispatch({type:ADD_MEMBER,payload:res.data})
    }catch(err){
        console.log(err.response);
        console.log(err.response.data);
    }
}
export const fetchAllCrew = () =>async dispatch =>{
    const res = await axios.get('/api/crew');
    dispatch({type:FETCH_ALL_CREW,payload:res.data || null})
}