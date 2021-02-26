import css from './App.module.css';
import React from "react";
import NavBar from "../Navigation";
import Search from "../SearchView";
import { Container } from 'react-bootstrap';
import ResultView from "../ResultView";
import CdvComponent from "../CdvComponent";
import ReservationView from "../ReservationView";
import ProfileView from "../ProfileView";
import PopUp from "../ResultView/AlertPopUp";
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {

// localStorage.removeItem("recherche");
// localStorage.removeItem("choix");
  return (

    <Container className={css.body}> 
      <NavBar />
      <Router>
          <Route path="/" exact component={Search} />
          <Route path="/result" component={ResultView} />
          <Route path="/reservation" component={ReservationView} />
          <Route path="/profile" component={ProfileView} />
          <Route path="/popup" component={PopUp} />
      </Router>
      <CdvComponent />
    </Container>

  );
}

export default App;
