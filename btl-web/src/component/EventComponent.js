import React, { Component } from "react";
import { FaComments } from "react-icons/fa";
import moment from "moment";

class EventComponent extends Component {
  onClick(id) {
    console.log(id);
    window.location.href = "http://localhost:3000/event/" + id;
    window.scrollTo(0, 0);
  }

  render() {
    const event = this.props.event;
    return (
      <div className="row-normal" style={{ marginBottom: "0px" }}>
        <img src={event.image} alt="abc" className="new-img" />
        <div className="info-new">
          <div>
            <div>
              <h3>{event.title}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <div className="date" style={{ fontStyle: "italic" }}>
                <small>
                  {moment(event.created_date).format("LL")} &nbsp;
                </small>
              </div>
              <div>
                <FaComments />
                <small> (10)</small>
              </div>
            </div>
          </div>

          <div>
            <p>{event.content[0].paragraph.substr(0, 120)}...</p>
            <button
              type="button"
              className="btn btn-danger"
              style={{ backgroundColor: "#9acd32", border: "none" }}
              onClick={() => this.onClick(event.id)}
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventComponent;
