import React, { Component, useContext } from "react";
import NavBar from "../Navigation";
import Search from "../SearchView";
import { Container } from 'react-bootstrap';
import ResultView from "../ResultView";
import css from "./MainView.module.css";
import List from "../../Contexts/List";

const MainView = () => {

  const {list, setList} = useContext(List);
  const searchFlight = (form)=>{
    setList([...list, form]);
  }


  
    return (
    <Container className={css.container}> 
       <NavBar />
       <ResultView  />
    </Container>

    );
  
}

export default MainView;
