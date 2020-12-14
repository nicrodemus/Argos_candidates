import React from "react";
import staticImage from "../assets/columns.jpg"
const crewMemberCard = (props) =>{
    return(
        <div style={{backgroundColor:"#1a237e",color:"white"}} className = "card">
            <div style={{backgroundImage:`url(${staticImage})`,height:"200px",backgroundSize:"cover"}} className="card-image">
            <button onClick={props.clicked} className="btn-floating halfway-fab waves-effect waves-light btn-large lime darken-2"><i className="material-icons">clear</i></button>

            </div>
            <span className="card-title">{props.name}</span>
            <div className="card-content">
        <p>{props.age} years old</ p>
        <p>candidate as :{props.job}</p>
    </div>
        </div>
    )
}
export default crewMemberCard;