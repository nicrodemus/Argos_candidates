import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import formFields from "./formFields";
import {withRouter} from "react-router-dom";
import * as actions from "../redux/actions/index";

const MemberFormReview = ({onCancel,showForm, form,error,submitForm,history}) =>{

    console.log("here 's my form", form);

    const reviewFields = _.map(formFields,({name,label}) =>{
        return  (
            <div key={name}>
                <label>{label}</label>
        
                <div>
                    {form[name]}
                 </div>
                 
            </div>
        )
      })

      return(
        <div>
            <h5>Please confirm your entries</h5>
            { reviewFields }

            <button
            className="yellow darken-3 btn-flat" 
            onClick={onCancel}>
                Back
            </button >
            <button  onClick={()=> submitForm(form,history)} className="green btn-flat right">NEW RECIPE <i className="material-icons right">email</i></button>
    

        </div>
    );
}
function mapStateToProps(state){
    console.log(state)
    return {form : state.form.memberForm.values, 
            
           }
   }
   export default connect(mapStateToProps,actions)(withRouter(MemberFormReview));