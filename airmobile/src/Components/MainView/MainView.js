import React, { Component } from "react";
import NavBar from "../Navigation";
import Search from "../SearchView";
import { Container } from 'react-bootstrap';
import ResultView from "../ResultView";
import css from "./MainView.module.css";

class MainView extends Component {
  render() {
    return (
    <Container className={css.container}> 
       <NavBar />

       <ResultView />
       
        <Search />

    </Container>

    );
  }
}

export default MainView;
