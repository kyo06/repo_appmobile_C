import React, { Component } from "react";
import css from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUser } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.avion}><FontAwesomeIcon icon={faPlaneDeparture} /> </div>
        <div className={css.profile}><FontAwesomeIcon icon={faUser} /></div>
        
      </div>
    ) ;
  }
}

export default Navigation;
