import React from "react";
import css from "./SearchView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, FormGroup, FormLabel, FormControl, FormCheck, Button,} from 'react-bootstrap';

const SearchView =() => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("pwet");
  };

    
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
                  <FormControl type="date" id="start" name="trip-start"
                value="2021-02-23"
                min="2021-02-23" max="2021-12-31" />
            </FormGroup></Col>
            <Col>  <FormGroup>
                <FormLabel>Date Retour</FormLabel>
                <FormControl type="date" id="end" name="trip-end"
                value="2021-02-23"
                min="2021-02-23" max="2021-12-31" />
            </FormGroup></Col>
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
