import React from "react";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
const header = ({crew}) =>{
    return(
        <nav>
            <div style={{backgroundColor:"#80cbc4"}} className ="nav-wrapper">
                <NavLink className="left brand-logo" to ="/">JASON'S QUEST</NavLink>
             
                <ul className= "right">
                <li><NavLink to="/form/new"><button  className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button></NavLink></li>
                    <li style={{"margin-right": "20px"}}>{crew.crew.length} candidates</li>

                </ul>

                </div>
            
        </nav>
    )

}

function mapStateToProps({crew}){
    console.log( "here you are", {crew})
    return {crew}
  }
export default connect(mapStateToProps)(withRouter(header))