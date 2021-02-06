import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { getUserRole } from "../services/TokenService";

//Containers
import HomeContainer from "../containers/home/HomeContainer";
import LoginContainer from "../containers/login/LoginContainer";
import AdminContainer from "../containers/admin/AdminContainer";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/login" exact component={LoginContainer} />
        <PrivateRoute path="/admin" exact component={AdminContainer} />
      </Switch>
    </div>
  );
};

const PrivateRoute = (props) => {
  var role = getUserRole(localStorage.getItem("access_token"));
  return role === "ADMIN" ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
