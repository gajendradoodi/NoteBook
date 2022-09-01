import React from 'react'

export default function Alert(props) {
    const Capatalize=(word)=>{
        var lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
    return (
        props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{Capatalize(props.alert.type)}</strong>: {props.alert.text}
       {/*  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
      </div>
      
    )
}
