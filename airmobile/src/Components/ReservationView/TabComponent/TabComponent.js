import React from "react";
import { Tabs, Tab, FormGroup, Form, Button } from 'react-bootstrap';
import css from "./TabComponent.module.css";
import CardCompo from "../CardComponent";

const TabComponent = ({name, vol}) => {
  return (<>
    {
    name === "aller" ?  
      <div className={css.green}>
            <CardCompo vol={vol} />
      </div> 
      :
      <div className={css.orange}>
            <CardCompo vol={vol} />
      </div>
      }
     
  </>
  );
};

export default TabComponent;
