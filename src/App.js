import React, { Suspense } from "react";
import Container from "./shared/Container";
import "./App.css";
import routers from "./routers";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App({ contacts, onIncrement, counterValue }) {
  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routers.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}
