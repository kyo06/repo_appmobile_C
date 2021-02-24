import React, {useState, useContext } from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import {listReservation} from "../../utils/listReservation";
import List from "../../Contexts/List"
import TabCompo from "./TabComponent";
import CardCompo from "./CardComponent";


const ReservationView =() => {

  const [resList, setResList] = useState(listReservation);
  const {reservation, setReservation} = useContext(List);

  
    return <>

       {/** Cadre pour les info d'une reservation btn annuler  */} 
       {
         resList.map((v) => <TabCompo vol={v} name="aller"  />)
       }

       {
         resList.map((v) => <TabCompo  vol={v} name="retour" />)
       }
       
       
       
       
    
    </>;
  
}

export default ReservationView;
