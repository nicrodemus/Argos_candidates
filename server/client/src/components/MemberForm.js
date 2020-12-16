import React,{ Component} from "react";
import { Link } from 'react-router-dom';
import _ from "lodash";
import {reduxForm,Field} from "redux-form";
import CandidateField from "./CandidateFields";
import formFields from "./formFields";
//import axios from "axios";

class MemberForm extends Component{
    renderFields(){
        return _.map(formFields,({label,name,type}) =>{
          //console.log("huiuiuiiu",type)
            return <Field key={name}  label={label} name={name} type={type} component={CandidateField}  />
        }) 
         

    }
    render(){
        const  {  handleSubmit  } = this.props;
          
        return(
            <div className="row" style={{marginTop:"30px",height:"600px"}}>
            <form className="col s12"
            onSubmit={handleSubmit(this.props.onRecipeSubmit)}
            //nitialValues={{name: "dudi"}}
            >
           
              {this.renderFields()}
              
              <Link to="/" className="red btn-flat white-text">
                Cancel
              </Link>
              <button type="submit" className="teal btn-flat right white-text">
                Next
                <i className="material-icons right">done</i>
              </button>
            </form>
          </div>
           );
       }
        
}
function validate(values){
    const errors={};
    _.each(formFields ,({name,errorMess}) =>{
        if(!values[name]){
            errors[name] = errorMess
        }
    })
     
   return  errors;
        
}

export default reduxForm({
validate,
form:"memberForm",
destroyOnUnmount:false
})(MemberForm)