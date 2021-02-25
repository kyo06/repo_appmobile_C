import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import css from "./CardComponent.module.css";
import { Card, Col } from 'react-bootstrap';

const CardComponent = ({rech,choix, name}) => {

  
  return (
  <>
    <Card className={css.card}>
      {(name === "aller") ? <>
      <Card.Body>
          <Col>
           
           
              <h4> <FontAwesomeIcon icon={faPlaneDeparture}/> {rech.departAero}</h4>
              <p>Date de Départ: {rech.departDate}</p>
              <p>Heure locale de décollage estimé: {choix.departTimeAller }</p>
                <hr />
                <h4><FontAwesomeIcon  icon={faPlaneArrival}/> {rech.arrivalAero}</h4>
                <p> Date d'arriver: {rech.departDate}</p>
                <p>Heure locale d'atterissage estimé: {choix.arrivalTimeAller}</p>
           
            </Col>
        
        
      </Card.Body>
      <Card.Footer>
          <FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants -  <FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes - Prix du vol : {choix.prixAller} € / Personnes
        </Card.Footer> 
            </> :<>
            <Card.Body>
            <Col>
            
              <h4> <FontAwesomeIcon icon={faPlaneDeparture}/> {rech.arrivalAero}</h4>
              <p>Date de Départ: {rech.retourDate}</p>  
              <p>Heure locale de décollage estimé: {choix.departTimeRetour }</p>
              <hr />
              <h4><FontAwesomeIcon  icon={faPlaneArrival}/> {rech.departAero}</h4>
              <p> Date d'arriver: {rech.retourDate}</p>
              <p>Heure locale d'atterissage estimé: {choix.arrivalTimeRetour}</p>

          </Col>

      </Card.Body>
      <Card.Footer>
          <FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants -  <FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes -  Prix du vol : {choix.prixRetour} € / Personnes
        </Card.Footer> 
      </>}
    </Card>
  </>
  );
};

export default CardComponent;
