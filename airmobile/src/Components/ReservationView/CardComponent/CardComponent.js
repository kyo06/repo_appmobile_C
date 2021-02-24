import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import css from "./CardComponent.module.css";
import { Button, Card, Row, Col } from 'react-bootstrap';

const CardComponent = ({vol}) => {




  return (
  <>
    <Card className={css.card}>
      <Card.Header> {vol.dateAller}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
           <h4>{vol.departAero }</h4>
           <p>Date de Départ: {vol.departDate}</p>
           <p>Heure locale de décollage estimé: {vol.departTime }</p>
          </Col>  
          <Col className={css.icon}>
          <FontAwesomeIcon icon={faPlaneDeparture}/>
          <FontAwesomeIcon  icon={faPlaneArrival}/>
          </Col>
          
          <Col>
          <h4>{vol.arrivalAero}</h4>
          <p> Date d'arriver: {vol.arrivalDate}</p>
          <p>Heure locale d'atterissage estimé: {vol.arrivalTime}</p>
          
          </Col>
      
         <Button variant="success">{vol.prix} €</Button>
        </Row>
      </Card.Body>
      <Card.Footer>
          <FontAwesomeIcon  icon={faChild}/> {vol.nbEnfants} Enfants -  <FontAwesomeIcon  icon={faUserFriends}/> {vol.nbAdultes} Adultes
        </Card.Footer>
    </Card>
  </>
  );
};

export default CardComponent;
