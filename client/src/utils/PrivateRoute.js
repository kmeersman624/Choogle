import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useUserContext } from "./UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useUserContext();
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /login page
  if (user.email) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default PrivateRoute;
