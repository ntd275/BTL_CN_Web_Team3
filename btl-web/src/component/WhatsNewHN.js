import React, { Component } from "react";
import { eventsHaNoiToday } from "../API/api";
import moment from "moment";

class WhatsNewHN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const events = await eventsHaNoiToday();
    this.setState({
      events: events.data,
    });
  }

  render() {
    const { events } = this.state;
    if (events.length !== 0) {
      console.log(events);
      var elmEvent = events.map((data) => {
        return (
          <div className="row-normal">
            <div
              className="card3"
              style={{ borderBottom: "1px solid #9acd32" }}
            >
              <img src={data.image} alt="" />
              <div className="about">
                <h7>{data.title}</h7>
                <p>
                  Thời gian: {moment(data.start_time).format("LL")} -{" "}
                  {moment(data.finish_time).format("LL")}
                </p>
              </div>
            </div>
          </div>
        );
      });
      return <>{elmEvent}</>;
    } else return null;
  }
}

export default WhatsNewHN;
