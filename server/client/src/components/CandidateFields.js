import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({input,label, type, meta:{touched,error,asyncValidating} }) =>{
    console.log("heres input", input)
      return (<div className="row" >
          <div className={ asyncValidating ? 'async-validating input-field col s6' : ''}>
          <div>{touched && error}</div> 
          <input {...input} 
          className="validate"
           type={type} 
            style={{marginBottom:"5px"}}
             />
             <label for={label}>{label}</label>
         
         </div>
      </div>)
  }