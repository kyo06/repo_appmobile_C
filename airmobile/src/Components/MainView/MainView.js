import React, { Component } from "react";
import css from "./MainView.module.css";
import NavBar from "../Navigation";
import Search from "../SearchView";
import { Container } from 'react-bootstrap';

class MainView extends Component {
  render() {
    return (
    <Container> 
      <h1> Air Mobile</h1>
       <NavBar />
        <Search />
    </Container>
      


    );
  }
}

export default MainView;
