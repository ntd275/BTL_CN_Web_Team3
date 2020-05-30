import React, { Component } from "react";
import moment from "moment";

class EventComponent extends Component {
  render() {
    const event = this.props.event;
    return (
      <div className="row-normal" style={{ marginBottom: "0px" }}>
        <img src={event.image} alt="abc" className="new-img" />
        <div className="info-new">
          <div>
            <div>
              <h3 style={{ marginBottom: "0" }}>{event.title}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <div className="date" style={{ fontStyle: "italic" }}>
                <small>
                  Thời gian: {moment(event.start_time).format("LL")}
                  {moment(event.finish_time).format("LL")}
                </small>
              </div>
            </div>
            <div>
              <small style={{ fontStyle: "italic" }}>
                Địa điểm: {event.address}
              </small>
            </div>
          </div>

          <div>
            <p>{event.content[0].paragraph.substr(0, 120)}...</p>
            <a href={`/events/${event.id}`}>
              <button
                type="button"
                className="btn btn-danger"
                style={{ backgroundColor: "#9acd32", border: "none" }}
              >
                Chi tiết
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default EventComponent;
