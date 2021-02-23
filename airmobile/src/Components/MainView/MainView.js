import React, { Component } from "react";
import css from "./MainView.module.css";
import NavBar from "Components/Navigation";
import Search from "Components/SearchView";

class MainView extends Component {
  render() {
    return (
    <div className={css.container}>
       <h1> Air Mobile</h1>
       <NavBar />
        <Search />
        
    </div>
    );
  }
}

export default MainView;
