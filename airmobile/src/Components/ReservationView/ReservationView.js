import React, {useState, useContext } from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import { listAller } from "../../utils/listAller";
import { listRetour} from "../../utils/listRetour";



import CardComponent from "./CardComponent";
import css from "./ReservationView.module.css";


const ReservationView =() => {
  const rechercheItem = JSON.parse(localStorage.getItem("recherche"));
  const choixItem = JSON.parse(localStorage.getItem("choix"));

    return (<>
           {
             
                <div className={css.green}>
                  <CardComponent rech={rechercheItem} choix={choixItem} name="aller" />
                </div>
              
           }
                    
          {
             
                <div className={css.orange}>
                  <CardComponent rech={rechercheItem} choix={choixItem} name="retour" />
                </div>
             
            }


        
    
    </>) ;
  
}

export default ReservationView;
