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
  return (
    <div className="App">
      <h1>React app!</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler.bind(this, 'Maxiee')}>Switch name</button>
      <Person 
      name={person.persons[0].name} 
      age={person.persons[0].age} />
      <Person 
      name={person.persons[1].name} 
      age={person.persons[1].age} 
      click = {
        switchNameHandler.bind(this, 'Max!!')
      } >
        
      </Person>
      <Person 
      name={person.persons[2].name} 
      age={person.persons[2].age} />
    </div>
  );
};

export default App;
