import "./App.css";
import { useState } from "react";
import Axios from 'axios';

// Axios issue still unresloved: Use postman to help debug
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age, 
      country: country, 
      position: position, 
      wage: wage,
  }).then(() => {
      console.log("Success");
    });
  };

  return (
  <div className="App">
    <h1>HR Management <em>Web App</em></h1>
    <br></br>
    <div className="information">
    <label>Name:</label>
    <input type="text" 
    onChange={(event) => {
      setName(event.target.value);
    }}
    />
    <label>Age:</label>
    <input type="number" 
    onChange={(event) => {
      setAge(event.target.value);
    }}
    />
    <label>Country:</label>
    <input type="text" 
    onChange={(event) => {
      setCountry(event.target.value);
    }}
    />
    <label>Position:</label>
    <input type="text" 
    onChange={(event) => {
      setPosition(event.target.value);
    }}
    />
    <label>Wage (Annual):</label>
    <input type="number" 
    onChange={(event) => {
      setWage(event.target.value);
    }}
    />
    <button onClick={addEmployee}>Add Employee</button>
    </div>
  </div>
  );
}

export default App;
