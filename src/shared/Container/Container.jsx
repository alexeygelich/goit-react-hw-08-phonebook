import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Container.css";
import Header from "../Header";

const ContainerWrapper = ({ children }) => (
  <div className="ContainerWrapper">
    <Header />
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
      <h2 className="logo">Phonebook</h2>
    </CSSTransition>
    {children}
  </div>
);

export default ContainerWrapper;
