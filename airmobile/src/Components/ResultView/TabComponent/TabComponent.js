import React, { useState } from "react";
import {listAller} from "../../../utils/listAller";
import {listRetour} from "../../../utils/listRetour";
import {listReservation} from "../../../utils/listReservation";
import List from "../List";
import { Tabs, Tab, ToggleButton, ToggleButtonGroup, Group } from 'react-bootstrap';

const TabComponent = () => {

  const [allerList, setAllerList] = useState(listAller);
  const [retourList, setRetourList] = useState(listRetour);
  const [resList, setResList] = useState(listReservation);


  return (<>
    <Tabs defaultActiveKey="aller" transition={false} id="tab">
        <Tab eventKey="aller" title="Aller">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            
              { allerList.map((v) => (
              
              <ToggleButton>
                {v.departAero} - {v.arrivalAero} - {v.prix} - {v.dateAller} - {v.dateRetour}
              </ToggleButton>

              ))}
              </ToggleButtonGroup>
          </Tab>
        <Tab eventKey="retour" title="Retour">
             { retourList.map((v) => (<List vol={v} key={v.id} />))}
        </Tab>
        <Tab eventKey="selection" title="Selection" >            
        { allerList.map((v) => (
         <p>{v.departAero}</p>
        
        
        ))}
        </Tab>
    </Tabs>
   </>
  );
};

export default TabComponent;
