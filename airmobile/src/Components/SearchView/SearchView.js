import React,  {useState}from "react";
import css from "./SearchView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, FormGroup, FormLabel, FormControl, FormCheck, Button,} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchView =() => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("pwet");
  
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  

    
      return(
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Aéroport de Départ</FormLabel>
            <FormControl
              name="title"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Aéroport de Départ</FormLabel>
            <FormControl
              name="title"
            />
          </FormGroup>
         
          <Row>
            <Col>
              <FormGroup>
                  <FormLabel>Date Aller</FormLabel>
                    <DatePicker selected={startDate} select={startDate} onChange={date => setStartDate(date)} />       
              </FormGroup>
            </Col>
            <Col>  
              <FormGroup>
                  <FormLabel>Date Retour</FormLabel>
                  <DatePicker selected={endDate} select={startDate} onChange={date => setEndDate(date)} />       
              </FormGroup>
            </Col>
          </Row>

          <FormLabel>Pour combien de personnes?</FormLabel>

            <Row>
              <Col>
              <FormGroup>
              <FontAwesomeIcon icon={faUserFriends} />
                <FormControl type="number" />
                </FormGroup>
              </Col>

              <Col>
              <FormGroup>
              <FontAwesomeIcon icon={faChild} />
                <FormControl type="number" />
            </FormGroup> </Col>  
            </Row>
          
          <FormGroup controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Vol Direct" />
          </FormGroup>
          
         
          <Button variant="success"type="submit">Rechercher</Button>

        </Form>
      </>);
 };


export default SearchView;
