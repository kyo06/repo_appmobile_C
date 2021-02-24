import React from "react";
import {} from 'react-bootstrap';


const List = ({vol, name}) => {
      
  return (
     <>
  <label>
    <input type="radio" name={name} class="card-input-element" />
  <div class="panel panel-default card-input">
    <div class="panel-heading">{vol.departAero}</div>
    <div class="panel-body">
      {vol.arrivalAero} - {vol.prix} - {vol.dateAller} - {vol.dateRetour}
    </div>
  </div>
  </label>
    
  

   </>  
  );
};

export default List;

