import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import css from "./CardComponent.module.css";
import { Button, Card, Row, Col } from 'react-bootstrap';

const CardComponent = ({rech,choix, name}) => {

  const prixTotal =()=> {
    const nbEnfants = rech.nbEnfants;
    const nbAdultes = rech.nbAdultes;
    const prixBillet = choix.prix;
    const calcul= (nbEnfants*prixBillet) + (nbAdultes*prixBillet)
    return calcul;
  }


  return (
  <>
    <Card className={css.card}>
      <Card.Header> {rech.dateAller}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
           <h4> <FontAwesomeIcon icon={faPlaneDeparture}/>{(name === "aller") ? <>{rech.departAero}</> : <>{rech.arrivalAero}</>}</h4>
           <p>Date de Départ: {rech.departDate}</p>
           <p>Heure locale de décollage estimé: {choix.departTime }</p>
          </Col>  
          <Col className={css.icon}>
     
          </Col>
          <Col>
          <h4><FontAwesomeIcon  icon={faPlaneArrival}/>{(name === "aller") ? <>{rech.departAero}</> : <>{rech.arrivalAero}</>}</h4>
          <p> Date d'arriver: {rech.arrivalDate}</p>
          <p>Heure locale d'atterissage estimé: {choix.arrivalTime}</p>
          
          </Col>
         <Button variant="success"> {prixTotal()} €</Button>
        </Row>
      </Card.Body>
      <Card.Footer>
          <FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants -  <FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes
        </Card.Footer>
    </Card>
  </>
  );
};

export default CardComponent;
