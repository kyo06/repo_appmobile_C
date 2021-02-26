import React from "react";
import css from "./RadioCardComponent.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

const RadioCardComponent = ({vol, name}) => {

  const rech = JSON.parse(localStorage.getItem("recherche"));

  return (<>
  <label className={css.label} >
    <div className={css.billet}>
      <div>
        <h4><FontAwesomeIcon icon={faPlaneDeparture}/>{rech.departAero}</h4>
        <p>Date de Départ: {rech.departDate}</p>
        <p>Heure locale de décollage estimé: {vol.departTimeAller }</p>
      </div>
      <div>
        <h4><FontAwesomeIcon  icon={faPlaneArrival}/>{rech.arrivalAero}</h4>
        <p> Date d'arriver: {rech.departDate}</p>
        <p>Heure locale d'atterissage estimé: {vol.arrivalTimeAller}</p>
      </div>
      </div>

      <div className={css.billetRight}>
        <div>
          <input type="radio" value={vol.id} name="aller" />
        </div>
        <div>Prix: {vol.prix} €</div> 
          <div>
            <span>Voyageurs</span>
            <div><FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants</div>   
            <div><FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes</div>
          </div>
        </div>           
  </label> 
  </>
  );
};

export default RadioCardComponent;
