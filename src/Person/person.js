import React from "react";
import './person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and im {props.age} year old
      </p>
       <button className = "gomb" onClick = {props.click}> Delete </button> 
      <input id="name" type="text" onChange={props.changed} value={props.currentName}/>
     
    </div>
  );
};

export default person;
