import React,{useEffect,} from "react";
import {connect} from "react-redux";
import CrewMemberCard from "./CrewMemberCard"; 
import {fetchAllCrew,deleteCandidate} from "../redux/actions/index"
const Landing = ({crew,fetchCrew,deleteOneCandidate}) =>{
    console.log("dadada",crew);
    const OnDelete =(id) =>{deleteOneCandidate(id)};
    useEffect(() => {
        fetchCrew()
    }, [])
    
const mapCrew = () =>{
 return crew.crew.map(el =>{

     return( 
     <div key ={el._id} className="col s12 l4">
     <CrewMemberCard 
         
          _id ={el._id}
          name={el.name}
          age={el.age}
          job = {el.job}
          clicked={() =>OnDelete(el._id)} 
          />
         
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
const mapDispatchToProps ={
   fetchCrew:fetchAllCrew,
   deleteOneCandidate:deleteCandidate
}


export default connect(mapStateToProps,mapDispatchToProps)(Landing)
