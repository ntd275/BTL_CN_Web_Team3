import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import { FaComments } from "react-icons/fa";
import { getNew } from "../API/api";
import moment from "moment";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      content: [],
    };
  }

  async componentDidMount() {
    const eventsId = this.props.match.params.id;
    const event = await getNew({ eventsId });
    this.setState({
      event: event.data[0],
      content: event.data[0].content,
    });
  }

  render() {
    const { event, content } = this.state;

    var elmEvent = content.map((element) => {
      console.log(element.paragraph);
      if (typeof element.paragraph === "undefined") {
        return (
          <div style={{ textAlign: "center" }}>
            <div>
              <img src={element.image} alt="abc" />
            </div>
          </div>
        );
      } else {
        return <p className="text-justify">{element.paragraph}</p>;
      }
    });

    return (
      <div className="content">
        <div className="big add-option-big">
          <article>
            <header>
              <h1>{event.title}</h1>
              <p style={{ display: "flex" }}>
                <div className="date" style={{ fontStyle: "italic" }}>
                  <small>
                    {moment(event.Created_date).format("LL")} &nbsp;
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
                <button type="button" className="social-sharing-facebook">
                  <i className="fa fa-facebook-f pr-1 add-option-i"></i>Facebook
                </button>
                <button type="button" className="social-sharing-twitter">
                  <i className="fa fa-twitter pr-1 add-option-i"></i>Twitter
                </button>
                <button type="button" className="social-sharing-google-plus">
                  <i className="fa fa-google-plus pr-1 add-option-i"></i>Google
                  +
                </button>
                <button type="button" className="social-sharing-instagram">
                  <i className="fa fa-instagram pr-1 add-option-i"></i>Instagram
                </button>
              </div>
            </div>
            <div className="pre-next-box-article">
              <div className="pre-article">
                <div>
                  <img
                    src="https://hanoigrapevine.com/wp-content/themes/event/images/icons/similar-left@2x.png"
                    alt=""
                    className="img-pre-article"
                  />
                  TRƯỚC
                </div>
                <a href="123">Chiếu phim "The Meeting" của Alan Gilsenan</a>
              </div>
              <div className="next-article">
                <div>
                  SAU
                  <img
                    src="https://hanoigrapevine.com/wp-content/themes/event/images/icons/similar-right@2x.png"
                    alt=""
                    className="img-next-article"
                  />
                </div>
                <a href="123">Chiếu phim "The Meeting" của Alan Gilsenan</a>
              </div>
            </div>
          </article>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default Event;
