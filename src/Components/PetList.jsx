import { useState } from "react";
import React, { useEffect } from "react";

export const PetList = ({pets, matchPets, employee}) => {

function getPets(employee, pets) {
 const matchedPets = pets.filter((pet) => pet.employeeId === employee.id)
  if (matchedPets.length > 0) {
    return matchPets(employee, pets) 
  } else {
    return <p>No pets listed for this employee.</p>
  }
}

    
  return (
    <aside className="pets-list">

      {getPets(employee, pets)}
    </aside>
  );
};

export default PetList;
