import React, { useState}  from "react";
import css from "./ResultView.module.css";
import { Button, Card, Row, InputGroup, Form, Group, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import {listAller} from "../../utils/listAller";
import {listRetour} from "../../utils/listRetour";
import RadioCardComponent from "./RadioCardComponent";



const ResultView = () => {
const selection = {
    departTime: "0",
    prixAller: "0",
    arrivalTime: "0",
    prixRetour: "0",
  
    isPayed: "false",
  };

  const [select, setSelect] = useState(selection);


  const rechercheItem = JSON.parse(localStorage.getItem("recherche"));

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(select);
    localStorage.setItem("choix", JSON.stringify(select)) 
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelect({...select, [name] : value });
    console.log(name, value);
    
  };

  const [allerList, setAllerList] = useState(listAller);
  const [retourList, setRetourList] = useState(listRetour);


  

  return (<>
  <Form onSubmit={handleSubmit}>
    <Tabs defaultActiveKey="aller" transition={false} id="tab">
         
      <Tab eventKey="aller" title="Aller">
        <h3>Voyage Aller</h3> 
         <Form.Group name="aller" onChange={handleChange}>
            { allerList.map((v) => (
              <div className={css.green}>
                <RadioCardComponent vol={v} key={v.id} name="aller" />
              </div>))
            }
        </Form.Group>
       </Tab>
      <Tab eventKey="retour" title="Retour">
      <h3>Voyage Retour</h3>
      <Form.Group name="retour" onChange={handleChange}>
              { retourList.map((v) => (
                <div className={css.orange}>
                  <RadioCardComponent vol={v} key={v.id} name="retour" />
                </div>))
              }
        </Form.Group>
      </Tab>
        
        <Tab eventKey="selection" title="Selection" >            
           <h4>Resultat</h4>
            {select ? select.aller + select.retour : ""}
            <Button onSubmit={handleSubmit}>Payer</Button>
        </Tab>
        
    </Tabs>
    </Form>
   </>
  );
};

export default ResultView;
