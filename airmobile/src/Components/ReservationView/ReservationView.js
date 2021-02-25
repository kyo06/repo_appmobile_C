import React from "react";
import {Button,} from 'react-bootstrap';




import CardComponent from "./CardComponent";
import css from "./ReservationView.module.css";


const ReservationView =() => {
  const rech = JSON.parse(localStorage.getItem("recherche"));
  const choix = JSON.parse(localStorage.getItem("choix"));
  const purge =() =>{
    localStorage.removeItem("recherche");
    localStorage.removeItem("choix");

  }

  const prixTotal =()=> {
    const nbEnfants = rech.nbEnfants;
    const nbAdultes = rech.nbAdultes;
    const prixBilletAller = choix.prixAller;
    const prixBilletRetour = choix.prixRetour;
    const calcul= 
    (nbEnfants*prixBilletAller) + (nbAdultes*prixBilletAller)
    +(nbEnfants*prixBilletRetour) + (nbAdultes*prixBilletRetour);
    return calcul;
  }


    return (<>
           {
                <div className={css.green}>
                  <CardComponent rech={rech} choix={choix} name="aller" />
                </div>
           }        
          {
             <div className={css.orange}>
                  <CardComponent rech={rech} choix={choix} name="retour" />
                </div>
          }

        <h3 variant="success">Montant Total de la Reservation {prixTotal()} €</h3>
        <p>Status du paiment : {choix.isPayed ?
            <>
              <h4>En attente de payement</h4>
              <Button variant="info">Payer la reservation?</Button>
            </>
          : 
            <>
              <h4>Payer</h4>
              <Button variant="danger" onClick={purge} href="/">Annuler la reservation?</Button>
            </>
        }</p>
        
        
        
        
        
    
    </>) ;
  
}

export default ReservationView;
