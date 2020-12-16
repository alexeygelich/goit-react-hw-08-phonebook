import React, { Suspense } from "react";
import "./App.css";
import routers from "./routers";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivatePage from "./components/PrivatePage";
import PublicPage from "./components/PublicPage";
import { CSSTransition } from "react-transition-group";
import Header from "./shared/Header";
import Alert from "./shared/Alert";

export default function App({ contacts, onIncrement, counterValue, error }) {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routers.map((route) =>
            route.privat ? <PrivatePage key={route.path} {...route} /> : <PublicPage key={route.path} {...route} />
          )}
          <Redirect path="/" to="/login" />
        </Switch>
      </Suspense>
      <CSSTransition in={error} timeout={500} classNames="fade-error" unmountOnExit>
        <Alert message={"Oops, something went wrong!"} />
      </CSSTransition>
    </BrowserRouter>
  );
}
