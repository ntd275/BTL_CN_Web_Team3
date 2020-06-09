import React, { Component } from "react";
import { FaComments } from "react-icons/fa";
import { getEvent, previousEvent, nextEvent, getEventAdmin } from "../API/api";
import moment from "moment";
import WhatsNewHN from "./WhatsNewHN";

class DemoEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      content: [],
      preEvent: [],
      nexEvent: [],
    };
  }

  async componentDidMount() {
    const eventsId = this.props.match.params.id;
    const event = await getEventAdmin({ eventsId });
    this.setState({
      event: event.data[0],
      content: event.data[0].content,
    });
  }

  render() {
    const { event, content } = this.state;
    var elmEvent = content.map((element) => {
      if (typeof element.paragraph === "undefined") {
        return (
          <div style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img src={element.image} alt="abc" style={{ maxWidth: "80%" }} />
            </div>
          </div>
        );
      } else {
        return <p className="text-justify">{element.paragraph}</p>;
      }
    });

    return (
      <div className="content">
        <div className="big">
          <article>
            <header>
              <h1>{event.title}</h1>
              <p style={{ display: "flex" }}>
                <div className="date" style={{ fontStyle: "italic" }}>
                  <small>
                    Đăng vào: {moment(event.Created_date).format("LL")} &nbsp;
                  </small>
                </div>
                <div>
                  <FaComments />
                  <small> (10)</small>
                </div>
              </p>
            </header>
            <div>
              <p className="text-justify info-event">
                Thời gian: {moment(event.start_time).format("LL")} -{" "}
                {moment(event.finish_time).format("LL")}
              </p>
              <p className="text-justify info-event">
                Địa điểm: {event.address}
              </p>
              {elmEvent}
            </div>

            <div className="social-sharing">
              <div className="social-sharing-box">
                <div style={{ margin: "auto" }}>
                  <button type="button" className="social-sharing-facebook">
                    <i className="fa fa-facebook-f pr-1 add-option-i"></i>
                    Facebook
                  </button>
                  <button type="button" className="social-sharing-twitter">
                    <i className="fa fa-twitter pr-1 add-option-i"></i>Twitter
                  </button>
                  <button type="button" className="social-sharing-google-plus">
                    <i className="fa fa-google-plus pr-1 add-option-i"></i>
                    Google +
                  </button>
                  <button type="button" className="social-sharing-instagram">
                    <i className="fa fa-instagram pr-1 add-option-i"></i>
                    Instagram
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="small" style={{ marginTop: "0px" }}>
          <div className="title">
            <a href>Có gì hôm nay</a>
          </div>
          <hr />
          <div className="btn-group button-group btn-new">
            <button type="button" className="btn btn-success ">
              Hà Nội
            </button>
            <button type="button" className="btn btn-success">
              HCM
            </button>
            <button type="button" className="btn btn-success">
              Lịch đầy đủ
            </button>
          </div>
          <WhatsNewHN />
        </div>
      </div>
    );
  }
}

export default DemoEvent;
