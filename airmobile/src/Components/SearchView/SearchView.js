import React,  {useState}from "react";
import css from "./SearchView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormGroup, FormLabel, FormControl, FormCheck, Button,} from 'react-bootstrap';
import {listAeroport} from "../../utils/listAeroports";

const SearchView =() => {

  const initialForm = {
      departAero: "", 
      arrivalAero: "", 
      departDate: "",
      retourDate: "",
      nbAdultes: "",
      nbEnfants: "0",
      direct: false,
  };

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(form);
    localStorage.setItem("recherche", JSON.stringify(form));
    setForm(initialForm);
    
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({...form, [name] : value });
    console.log(name, value);
    
  };

const date = new Date().toLocaleDateString();


  
  /** Aeroport   */
  const aeroports = listAeroport.map((i) => (
    <option value={`${i.NomAeroport} ${i.CodeIATA}`}>{i.NomAeroport} - {i.CodeIATA} - {i.Pays}</option> 
  ));
    
    return(
      <>
        <Form  onSubmit={handleSubmit} >
          <FormGroup>
            <FormLabel>Aéroport de Départ</FormLabel>
            <Form.Control as="select" onChange={handleChange} name="departAero">
            <option></option> 
                {aeroports},
            </Form.Control>
          </FormGroup>
          <FormGroup>
            <FormLabel>Aéroport d'Arrivée</FormLabel>
            <Form.Control as="select"  onChange={handleChange} name="arrivalAero">
            <option></option> 
                {aeroports},
            </Form.Control>
          </FormGroup>
         
          <Form.Row>
              <FormGroup as={Col}>
                  <FormLabel>Date Aller </FormLabel>
                  <FormGroup className={css.datepiker}>
                  <input type="date" min={date} onChange={ handleChange} name="departDate"/>       
                  </FormGroup>      
              </FormGroup>

              <FormGroup as={Col}>
                  <FormLabel>Date Retour</FormLabel>
                  <FormGroup className={css.datepiker}>
                  <input type="date" min={date} onChange={ handleChange} name="retourDate"/>       
                  </FormGroup>
              </FormGroup>
          </Form.Row>

          <FormLabel>Pour combien de personnes?</FormLabel>

            <Form.Row className={css.center}>
            <FormGroup as={Col}>
                <FontAwesomeIcon  icon={faUserFriends} /> Adulte
                <Form.Control  type="number" min="0" name="nbAdultes" onChange={handleChange}/>
            </FormGroup>  
            <FormGroup as={Col}>
                <FontAwesomeIcon  icon={faChild} /> Enfants -16ans
                <FormControl  type="number" min="0" name="nbEnfants" onChange={handleChange}/>
                </FormGroup>
            </Form.Row>
            
          
          <FormGroup controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Vol Direct (Nous proposons seulement des vols Directs)" name="direct" onChange={handleChange}/>
          </FormGroup>
          
         {/* Au click on envoie a ResultView */}
          <Button variant="success" type="submit">Rechercher</Button>

        </Form>
      </>
    );
 };


export default SearchView;
