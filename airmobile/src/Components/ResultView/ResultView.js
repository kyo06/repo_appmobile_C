import React, { useState}  from "react";
import css from "./ResultView.module.css";
import { Button, Tab, Tabs, Form, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import {listAller} from "../../utils/listAller";
import {listRetour} from "../../utils/listRetour";
// import RadioCardComponent from "./RadioCardComponent";




const ResultView = () => {
    
  const selection = {
      departTimeAller: "",
      departTimeRetour: "",
      prixAller: "",
      arrivalTimeAller:"",
      arrivalTimeRetour:"",
      prixRetour: "",
      isPayed: false,
  };

  const [select, setSelect] = useState(selection);


  //const rechercheItem = JSON.parse(localStorage.getItem("recherche"));

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(select);
    localStorage.setItem("choix", JSON.stringify(select)) 
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelect({...select, [name] : value });
    console.log(e.target);

  };

  // const checked = (e) => {
  //   console.log(e.target.id);
  // };

  const [allerList] = useState(listAller);
  const [retourList] = useState(listRetour);


  

  return (<>
  <Form onSubmit={handleSubmit} className={css.Container}>
    <Tabs defaultActiveKey="aller" transition={false} id="tab">
         
      <Tab eventKey="aller" title="Aller">
        <h3><FontAwesomeIcon icon={faPlaneDeparture}/> ~Voyage Aller~<FontAwesomeIcon icon={faPlaneArrival}/></h3> 
         
    
         
        <Form.Group name="aller" onChange={handleChange}>
          <fieldset >
            { allerList.map((v) => (
              // <div className={css.green}>
              //   <RadioCardComponent vol={v} key={v.id} name="aller" />
              // </div>
              <label className={css.label}>
              <input type="radio" id={v.id} value={v.departTime} name="departTimeAller" />
              <input type="radio" id={v.id} value={v.prix} name="prixAller" />
              <input type="radio" id={v.id} value={v.arrivalTime} name="arrivalTimeAller" />
              
              
            </label>

             
             
            ))
          }
        </fieldset>
       </Form.Group>
       </Tab>






      <Tab eventKey="retour" title="Retour">
      <h3><FontAwesomeIcon icon={faPlaneDeparture}/> ~Voyage Retour~<FontAwesomeIcon icon={faPlaneArrival}/></h3>
      <Form.Group name="retour" onChange={handleChange}>
      <fieldset >
              { retourList.map((v) => (
                // <div className={css.orange}>
                //   <RadioCardComponent vol={v} key={v.id} name="retour" />
                // </div>
              <label className={css.label}>
              <input type="radio" id={v.id} value={v.departTime} name="departTimeRetour" />
              <input type="radio" id={v.id} value={v.arrivalTime} name="arrivalTimeRetour" />
              <input type="radio" id={v.id} value={v.prix} name="prixRetour" />
              </label>
              ))
              
              }
              </fieldset>
        </Form.Group>
      </Tab>
        
        <Tab eventKey="selection" title="Selection" >            
           <h4>Votre choix de vols Aller et Retour</h4>
           <Col>
           <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Etape</th>
                  <th>Heure Décollage</th>
                  <th>Heure Atterissage</th>
                  <th>Prix pas Voyageur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aller</td>
                  <td>{select.departTimeAller}</td>
                  <td>{select.arrivalTimeAller}</td>
                  <td>{select.prixAller}€</td>
                </tr>
                <tr>
                  <td>Retour</td>
                  <td>{select.departTimeRetour}</td>
                  <td>{select.arrivalTimeRetour}</td>
                  <td>{select.prixRetour}€</td>
                </tr>
                </tbody>
              </Table>               
              <input type="hidden" name="isPayed" value="true"/>
              <Button type="submit" variant="primary" size="lg" block href="popup">Payer</Button>
            
            </Col>
        </Tab>
        
    </Tabs>
    </Form>
   </>
  );
};

export default ResultView;
