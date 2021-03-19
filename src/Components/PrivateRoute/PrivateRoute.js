import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      //   render={({ location }) =>
      //     auth.user ? (
      //       children
      //     ) : (
      //       <Redirect
      //         to={{
      //           pathname: "/login",
      //           state: { from: location },
      //         }}
      //       />
      //     )
      //   }
    />
  );
};

export default PrivateRoute;
