import React, { Suspense } from "react";
import Container from "./shared/Container";
import "./App.css";
import routers from "./routers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivatePage from "./components/PrivatePage";
import PublicPage from "./components/PublicPage";

export default function App({ contacts, onIncrement, counterValue }) {
  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routers.map((route) =>
              route.privat ? <PrivatePage key={route.path} {...route} /> : <PublicPage key={route.path} {...route} />
            )}
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}
