import React, { Component } from "react";
import "../../CSS/calendarpage.css";
import "../../CSS/dashboard.css";

import PostCharts from "./PostCharts";
import ViewCharts from "./ViewCharts";
import NewUpdateEvents from "./NewUpdateEvents";
import NewUpdateNews from "./NewUpdateNews";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <PostCharts />
        <ViewCharts />
        <NewUpdateEvents />
        <NewUpdateNews />
      </div>
    );
  }
}

export default DashBoard;
