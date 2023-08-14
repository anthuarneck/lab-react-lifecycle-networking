import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {

  const [pets, setPets] = useState([])

  function getPetList() {
    fetch("https://one0-2-vet-api.onrender.com/api/pets")
      .then((data) => data.json())
      .then((json) => {setPets(json)})
      .catch((error) => {
        console.log(error);
      });
    }
    
    useEffect(() => {
      getPetList()
    }, [])

  return (
    <>
      <NavBar />
      <EmployeeList pets={pets}/>
    </>
  );
};

export default App;
