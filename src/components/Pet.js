import React from "react";

function Pet({pet, onAdoptPet}) {
  
  function handleButton(){
    onAdoptPet(pet.id)
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button  className={pet.isAdopted? "ui primary button" : "ui disabled button" }>Already adopted</button>
        <button onClick={handleButton} className={pet.isAdopted? "ui disabled button" : "ui primary button" }>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
