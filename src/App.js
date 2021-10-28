import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import HomePage from "./pages/HomePage";
function App() {
  
  let routes;
  
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
 
  return (
   
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
 
  );
}

export default App;

