import React, { Component, useContext } from "react";
import NavBar from "../Navigation";
import Search from "../SearchView";
import { Container } from 'react-bootstrap';
import ResultView from "../ResultView";
import CdvComponent from "../CdvComponent";
import ReservationView from "../ReservationView";
import css from "./MainView.module.css";
import List from "../../Contexts/List";

const MainView = () => {

  const {list, setList} = useContext(List);
  


  
    return (
    <div className={css.body}>
    <Container className={css.body}> 
       <NavBar />
       <ResultView />
      <CdvComponent />
    </Container>
</div>
    );
  
}

export default MainView;
