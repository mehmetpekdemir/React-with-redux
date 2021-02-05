import React from "react";
import { Route, Switch } from "react-router-dom";

//Containers
import HomeContainer from "../containers/home/HomeContainer";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeContainer}></Route>
      </Switch>
    </div>
  );
};
