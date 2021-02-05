import React from "react";
import { Route, Switch } from "react-router-dom";

//Containers
import HomeContainer from "../containers/home/HomeContainer";
import LoginContainer from "../containers/login/LoginContainer";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeContainer}></Route>
        <Route path="/login" exact component={LoginContainer}></Route>
      </Switch>
    </div>
  );
};
