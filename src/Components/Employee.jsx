import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";


export const Employee = ({employee, pets, getPetList}) => {
  
  const [showPets, setShowPets] = useState(false)

  function getFullName(employee) {
    if (employee.prefix) {
      return `${employee.prefix} ${employee.firstName} ${employee.lastName}`
    } else if (employee.postfix) {
      return `${employee.firstName} ${employee.lastName}, ${employee.postfix}`
    } else {
      return `${employee.firstName} ${employee.lastName}`
    }
  }


  function matchPets(employee, pets) {
    const matchedPets = pets.filter((pet) => pet.employeeId === employee.id);

    const petNames = matchedPets.map((pet) => pet.name);
    const petNamesJoined = petNames.join(', ');

    return <div>{petNamesJoined}</div>;
  }


  function handleClick (){
    setShowPets(!showPets)
  }

  return (
    <article className="employee">
      <h3>{getFullName(employee)}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleClick}>Show Pets</button>
      
      {showPets && (
        <PetList matchPets={matchPets} pets={pets} employee={employee} />
      )}
      
    </article>
  );
};

export default Employee;
