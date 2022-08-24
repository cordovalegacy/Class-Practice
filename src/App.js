import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Cordova"}
        firstName={"Brendan"}
        age={26}
        hair={"dark brown"}
      />
      <PersonCard
        lastName={"Cordova"}
        firstName={"Tori"}
        age={25}
        hair={"dark brown"}
      />
      <PersonCard 
      lastName={"Witzel"}
      firstName={"Hailey"}
      age={15}
      hair={"pink"} 
      />
      <PersonCard
      lastName={"Russell"}
      firstName={"Curtis"}
      age={49}
      hair={"gray"}
      />
    </div>
  );
}

export default App;