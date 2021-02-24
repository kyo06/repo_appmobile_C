import React, {useState, useContext } from "react";
import {Card, Button, Nav} from 'react-bootstrap';
import {listReservation} from "../../utils/listReservation";
import List from "../../Contexts/List"
import Tab from "./TabComponent";


const ReservationView =() => {

  const {reservation, setReservation} = useContext(List);
  const [resvList] = localStorage.getItem("choix")
  
    return <>

       {/** Cadre pour les info d'une reservation btn annuler  */} 
       <Tab />
    
    </>;
  
}

export default ReservationView;
