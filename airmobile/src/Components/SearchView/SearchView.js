import React,  {useState}from "react";
import css from "./SearchView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, FormGroup, FormLabel, FormControl, FormCheck, Button,} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {listAeroport} from "../../utils/listAeroports";

const SearchView =({add}) => {

  const initialForm = {
      departAero: "", 
      arrivalAero: "", 
      departDate: "",
      retourDate: "",
      nbAdultes: "",
      nbEnfants: "",
      direct: false,
  };

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(form);
    add(form);
    setForm(initialForm);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name] : value });
    console.log(name, value);
    
     
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  /** Aeroport   */
  const aeroports = listAeroport.map((i) => (
    <option value={i.id}>{i.NomAeroport} - {i.CodeIATA} - {i.Pays}</option> 
  ));
 

    
      return(
      <>
        <Form onSubmit={handleSubmit} >
          <FormGroup>
            <FormLabel>Aéroport de Départ</FormLabel>
            <Form.Control as="select" onChange={handleChange} name="departAero">
                {aeroports},
            </Form.Control>
          </FormGroup>
          <FormGroup>
            <FormLabel>Aéroport de Départ</FormLabel>
            <Form.Control as="select"  onChange={handleChange} name="arrivalAero">
                {aeroports},
            </Form.Control>
          </FormGroup>
         
          <Form.Row>
              <FormGroup as={Col}>
                  <FormLabel>Date Aller </FormLabel>
                  <FormGroup className={css.datepiker}>
                  <DatePicker selected={startDate} select={startDate} onChange={date => setStartDate(date) + handleChange} name="departDate"/>       
                  <FontAwesomeIcon icon={faCalendarAlt} /> 
                  </FormGroup>      
              </FormGroup>

              <FormGroup as={Col}>
                  <FormLabel>Date Retour</FormLabel>
                  <FormGroup className={css.datepiker}>
                  <DatePicker className={css.datepikerDatePicker} selected={endDate} select={startDate} onChange={date => setEndDate(date) + handleChange} name="retourDate"/>       
                  <FontAwesomeIcon className={css.datepikerFontAwesomeIcon} icon={faCalendarAlt} />
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
            <FormCheck type="checkbox" label="Vol Direct" name="direct" onChange={handleChange}/>
          </FormGroup>
          
         {/* Au click on envoie a ResultView */}
          <Button variant="success"type="submit">Rechercher</Button>

        </Form>
      </>);
 };


export default SearchView;
