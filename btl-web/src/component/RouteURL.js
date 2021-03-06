import React, { Component } from "react";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard/DashBoard";
import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import TaskBar from "./TaskBar";
import AdminListEvent from "./AdminListEvent";
import AdminEvent from "./AdminEvent";
import AdminAccount from "./AdminAccount";
import AdminCreateAccount from "./AdminCreateAccount";
import AdminListAccount from "./AdminListAccount";
import AdminActiveEvent from "./AdminActiveEvent";
import AdminActiveNew from "./AdminActiveNew";
import AdminListNew from "./AdminListNew";
import AdminNew from "./AdminNew";
// import DemoEvent from "./DemoEvent";
import DemoNew from "./DemoNew";
import DemoEvent from "./DemoEvent";

class RouterURL extends Component {
  render() {
    const { authenticated, setSignin } = this.props;
    return (
      <Route>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-main">
          <TaskBar setSignin={setSignin} authenticated={authenticated} />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-main-event">
            <Switch>
              <Route
                exact
                path="/admin"
                render={() => <Admin setSignin={setSignin} />}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/dashboard"
                component={DashBoard}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-event/:id"
                component={AdminEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-create-event"
                component={AdminEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-new/:id"
                component={AdminNew}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-create-new"
                component={AdminNew}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-account"
                component={AdminAccount}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-create-account"
                component={AdminCreateAccount}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-list-account/:id"
                component={AdminListAccount}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-events-page/:id"
                component={AdminListEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-events-category/:category/:id"
                component={AdminListEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-active-event/:id"
                component={AdminActiveEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-active-new/:id"
                component={AdminActiveNew}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/admin-news-page/:id"
                component={AdminListNew}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/demo-event/:id"
                component={DemoEvent}
              />

              <PrivateRoute
                authenticated={authenticated}
                exact
                path="/demo-new/:id"
                component={DemoNew}
              />
            </Switch>
          </div>
        </div>
      </Route>
    );
  }
}

export default RouterURL;
