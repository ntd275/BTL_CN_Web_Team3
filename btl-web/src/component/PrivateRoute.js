import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true || localStorage.getItem("accessToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/admin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
