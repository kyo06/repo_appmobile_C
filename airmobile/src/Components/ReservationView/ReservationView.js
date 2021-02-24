import React, {useState, useContext } from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import {listReservation} from "../../utils/listReservation";
import List from "../../Contexts/List"

import CardComponent from "./CardComponent";
import css from "./ReservationView.module.css";


const ReservationView =() => {

  const [resList, setResList] = useState(listReservation);
  const {reservation, setReservation} = useContext(List);

  
    return <>

       {/** Cadre pour les info d'une reservation btn annuler  */} 
       {
         resList.map((v) => 
          <div className={css.green}>
            <CardComponent vol={v} />
          </div>
       )
       }

       {
         resList.map((v) => 
            <div className={css.orange}>
                <CardComponent vol={v} />
            </div>
              )
       }

    </>;
  
}

export default ReservationView;
