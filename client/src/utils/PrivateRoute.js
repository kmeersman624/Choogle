import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "./UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useUserContext();

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        user.email ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
