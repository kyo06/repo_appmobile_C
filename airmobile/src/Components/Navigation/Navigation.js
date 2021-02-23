import React, { Component } from "react";
import css from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.avion}><FontAwesomeIcon icon={faCoffee} /> </div>
        <div className={css.profile}>Profile</div>
        
      </div>
    ) ;
  }
}

export default Navigation;
