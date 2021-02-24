import React, { useState } from "react";
import {listAller} from "../../../utils/listAller";
import {listRetour} from "../../../utils/listRetour";
import {listReservation} from "../../../utils/listReservation";
import List from "../List";
import { Tabs, Tab, ToggleButtonGroup, FormGroup, Form, Button } from 'react-bootstrap';

const TabComponent = () => {

  const selection = {
    aller: "",
    retour: "",
  };

  const [select, setSelect] = useState(selection);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(select);
  
   
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelect({...select, [name] : value });
    console.log(name, value);
    
  };

  const [allerList, setAllerList] = useState(listAller);
  const [retourList, setRetourList] = useState(listRetour);
  const [resList, setResList] = useState(listReservation);

  

  return (<>
  <form onSubmit={handleSubmit}>
    <Tabs defaultActiveKey="aller" transition={false} id="tab">
         
      <Tab eventKey="aller" title="Aller">
         <FormGroup   onChange={handleChange} name="aller">
            { allerList.map((v) => (<List vol={v} key={v.id} name="aller" />))}
         </FormGroup>
      </Tab>
      <Tab eventKey="retour" title="Retour">
        <Form.Control as="select"  htmlSize={allerList.length} onChange={handleChange} name="retour">
              { retourList.map((v) => (<List vol={v} key={v.id} name="retour" />))}
        </Form.Control>
      </Tab>
        
        <Tab eventKey="selection" title="Selection" >            
           <h4>Resultat</h4>
            {select ? select.aller + select.retour : ""},
            <Button>Payer</Button>
        </Tab>
        
    </Tabs>
    </form>
   </>
  );
};

export default TabComponent;
