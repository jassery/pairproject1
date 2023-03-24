import React from 'react'

const Petdetails = ({petToUpdate}) => {
 console.log(petToUpdate);
      return (
        <div className="pet-details">
          <div className="pet-image">
            <img src={petToUpdate.imageUrl} />
          </div>
          <div className="pet-info">
            <h1>{petToUpdate.name}</h1>
            <h2>{petToUpdate.age}</h2>
            <p>{petToUpdate.description}</p>
            <h2>{petToUpdate.race}</h2>
            
          </div>
        </div>
      );
}

export default Petdetails