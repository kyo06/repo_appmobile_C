import React from "react";
import { ToggleButton} from 'react-bootstrap';

const List = ({vol}) => {
      
  return (<>
      <ToggleButton value={2}>Radio 2</ToggleButton>
      <ToggleButton>
        {vol.departAero} - {vol.arrivalAero} - {vol.prix} - {vol.dateAller} - {vol.dateRetour}
      </ToggleButton>
  </>);
};

export default List;
