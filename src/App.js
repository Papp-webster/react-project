import React, { useState } from "react";
import "./App.css";
import Person from "./Person/person";

const App = (props) => {
  const [person, setPersons] = useState({
    persons: [
      { name: "Max", age: "22" },
      { name: "Manu", age: "18" },
      { name: "Lucy", age: "28" },
    ],
    other: "something",
  });

   

  const switchNameHandler = (newName) => {
    setPersons({
      persons: [
        { name: newName, age: "33" },
        { name: "Pisti", age: "36" },
        { name: "Géza", age: "22" },
      ],
    });
  };


  const nameChangedHandler = (event) => {
    setPersons({
      persons: [
        { name: "max", age: "33" },
        { name: event.target.value, age: "36" },
        { name: "Géza", age: "22" },
      ],
    });
  }

  // inline styling!!
  const gomb ={
   backgroundColor: 'blue',
   color: '#eee',
   border: '1px solid green',
   borderRadius: '16px',
   padding: '10px',
   cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>React app!</h1>
      <p>This is working!</p>
      <button style={gomb} onClick={switchNameHandler.bind(this, 'Maxiee')}>Switch name</button>
      <Person 
      name={person.persons[0].name} 
      age={person.persons[0].age} />
      <Person 
      name={person.persons[1].name} 
      age={person.persons[1].age} 
      click = {
        switchNameHandler.bind(this, 'Max!!')
      }
      changed = {
        nameChangedHandler
      }
      currentName = {person.name}>
        
      </Person>
      <Person 
      name={person.persons[2].name} 
      age={person.persons[2].age} />
    </div>
  );
};

export default App;
