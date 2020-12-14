import React from "react";
import {connect} from "react-redux";
import CrewMemberCard from "./CrewMemberCard"; 
const landing = ({crew}) =>{
    console.log("dadada",crew)
const mapCrew = () =>{
 return crew.crew.map(el =>{

     return( 
     <div key ={el._id} className="col s12 l4">
     <CrewMemberCard 
         
          _id ={el._id}
          name={el.name}
          age={el.age}
          job = {el.job} />
          
          </div>
          
     )
  })
}

return(
   <div style={{backgroundColor:"#82b1ff "}} className="row">
       {mapCrew()}
   </div>
)
}
function mapStateToProps({crew}){
    
    return ({crew})
}


export default connect(mapStateToProps)(landing)
