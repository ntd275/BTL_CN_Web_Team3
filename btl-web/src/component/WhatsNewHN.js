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
      var elmEvent = events.map((data) => {
        return (
          <div
            className="row-normal"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <div
              className="card3"
              style={{ borderBottom: "1px solid #9acd32" }}
            >
              <img src={data.image} alt="" />
              <div className="about">
                <a href={`/events/${data.id}`}><h6 style={{ fontWeight: "bolder" }}>{data.title}</h6></a>
                <p>
                  Thời gian: {moment(data.start_time).format("LL")} -{" "}
                  {moment(data.finish_time).format("LL")}
                </p>
              </div>
            </div>
          </div>
        );
      });
      return <div style={{maxHeight: '50vh', overflow: 'auto'}}>{elmEvent}</div>;
    } else return null;
  }
}

export default WhatsNewHN;
