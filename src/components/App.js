import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => 
      fetch("http://localhost:3001/pets")
      .then(res => res.json())
      .then(animals => setPets(animals))
    , [])

  function onAdoptPet(petID){
   const newPets = pets.map(pet => {
      if(pet.id === petID) {
        return {
        ...pet,
        isAdopted: true,
      }}
      else return pet
  })
  setPets(newPets)
  }

  function onFindPetsClick(){
    if(filters === "all"){
      fetch("http://localhost:3001/pets")
      .then(res => res.json())
      .then(animals => setPets(animals))
    }else{
      fetch(`http://localhost:3001/pets?type=${filters}`)
     .then(res => res.json())
     .then(animals => setPets(animals))
    }
  }

  function onChangeType(filterType){
    setFilters(filterType)
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
