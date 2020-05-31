import React, { Component } from "react";
import PrivateRoute from "./PrivateRoute";
import Adminlogin from "./Adminlogin";
import DashBoard from "./DashBoard";
import { Route } from "react-router-dom";
// import PropTypes from "prop-types";

class RouterURL extends Component {
//   static propTypes = {
//     setLogin: PropTypes.func.isRequired,
//   };

  render() {
    const { authenticated, setSignin } = this.props;
    return (
      <>
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/dashboard"
          component={DashBoard}
        />

        <Route
          exact
          path="/admin"
          render={() => <Adminlogin setSignin={setSignin} />}
        />
      </>
    );
  }
}

export default RouterURL;
