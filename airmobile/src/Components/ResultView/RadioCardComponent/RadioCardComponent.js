import React from "react";
import css from "./RadioCardComponent.module.css";
import { Button, Card, Row, Col, Form, Label } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

const RadioCardComponent = ({vol, name}) => {
  return (<>
  
  <Card className={css.card}>
      <Card.Header> {vol.dateAller}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
           <h4><FontAwesomeIcon icon={faPlaneDeparture}/>{vol.departAero }</h4>
           <p>Date de Départ: {vol.departDate}</p>
           <p>Heure locale de décollage estimé: {vol.departTime }</p>
          </Col>  
          <Col className={css.icon}>
        
          </Col>

          <Col>
          <h4><FontAwesomeIcon  icon={faPlaneArrival}/>{vol.arrivalAero}</h4>
          <p> Date d'arriver: {vol.arrivalDate}</p>
          <p>Heure locale d'atterissage estimé: {vol.arrivalTime}</p>
          
          </Col>
      
         <Col> Prix: {vol.prix} €</Col>
        </Row>
      </Card.Body>
      <Card.Footer>
          <FontAwesomeIcon  icon={faChild}/> {vol.nbEnfants} Enfants -  <FontAwesomeIcon  icon={faUserFriends}/> {vol.nbAdultes} Adultes
        </Card.Footer>
    </Card>
  </>
  );
};

export default RadioCardComponent;
