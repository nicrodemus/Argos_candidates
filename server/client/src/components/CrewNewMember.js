import React,{Component} from "react";
import {reduxForm} from "redux-form";
import MemberForm from "./MemberForm";
import MemberFormReview from "./MemberFormReview";
class CrewNewMember extends Component{
    
    // Required step: always call the parent class' constructor


    // Set the state directly. Use props if necessary.
    state = {
        showForm : false
    }

renderContent(){
 if(this.state.showForm){
     
     return(
         <MemberFormReview {...this.state} onCancel={() =>this.setState({showForm:false})} />
     )
 }
 else{return (
     <MemberForm onRecipeSubmit={() =>this.setState({showForm:true})} />
 )}
}

render() {
   
return <div>{this.renderContent()}</div>;
}
}

//return {form : state.form.recipeForm.values }

export default (reduxForm({form:"memberForm",})(CrewNewMember));
