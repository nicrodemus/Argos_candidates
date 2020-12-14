import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({input,label, type, meta:{touched,error,asyncValidating} }) =>{
    console.log("heres input", input)
      return (<div>
          <div className={asyncValidating ? 'async-validating' : ''}>
          <label>{label}</label>
          <input {...input}
           type={type} 
            style={{marginBottom:"5px"}}
             />
         <div>{touched && error}</div> 
         </div>
      </div>)
  }