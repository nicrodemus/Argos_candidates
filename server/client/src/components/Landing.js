import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import CrewMemberCard from "./CrewMemberCard"; 
import {fetchAllCrew,deleteCandidate} from "../redux/actions/index"
const Landing = ({crew,fetchCrew,deleteOneCandidate}) =>{


    const [searchTerm,setSearchTerm] = useState("");
    const [filteredCrew,setFilteredCrew] = useState([]);


    const handleChange = event =>{
        setSearchTerm(event.target.value);
    }
    console.log("dadada",crew);
    const OnDelete =(id) =>{deleteOneCandidate(id)};
    
    useEffect(() => {
        fetchCrew()
    }, []);
    useEffect(() =>{
        const res = crew.crew.filter(el =>el.job.toLowerCase()
        .includes(searchTerm.toLowerCase().trim()))
        .map(el =>{

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
         setFilteredCrew([res])
    },[searchTerm,crew])
/*const mapCrew = () =>{
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
} */

return(
    <div >
                <input type="text"
         placeholder=" job crew search"
         value={searchTerm}
         onChange={handleChange}/>
   <div style={{backgroundColor:"#82b1ff "}} className="row">
    {filteredCrew}
   </div>
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
