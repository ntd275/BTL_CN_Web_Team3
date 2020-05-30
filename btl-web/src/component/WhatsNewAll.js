import React, { Component } from "react";
import { eventsHoChiMinhToday, eventsHaNoiToday } from "../API/api";
import moment from "moment";

class WhatsNewAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    const events1 = await eventsHaNoiToday();
    const events2 = await eventsHoChiMinhToday();

    const events = events1.data.concat(events2.data);
    console.log(events);
    this.setState({
      events: events,
    });
  }

  render() {
    const { events } = this.state;
    if (events.length !== 0) {
      console.log(events);
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

export default WhatsNewAll;
