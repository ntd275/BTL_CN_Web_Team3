import WhatsNew from "./WhatsNew";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../CSS/slick.css";
import { getEventsCategory } from "../API/api";
import moment from "moment";

const Event = (props) => {
  const event = props.data;
  return (
    <div className="row-normal-add-option">
      <div className="card-normal-add-option">
        <a href={`/events/${event.id}`}>
          <img src={event.image} alt="abc" className="new-img" />
          <div>
            <h3 style={{ marginBottom: "0" }}>{event.title}</h3>
          </div>
        </a>
        <div style={{ display: "flex" }}>
          <div className="date" style={{ fontStyle: "italic" }}>
            <small>
              Thời gian: {moment(event.start_time).format("LL")} -{" "}
              {moment(event.finish_time).format("LL")} - &nbsp;
            </small>
          </div>
        </div>
        <div>
          <small style={{ fontStyle: "italic" }}>{event.address}</small>
        </div>
      </div>
    </div>
  );
};

const Events = (props) => {
  var data = props.data;
  var name = props.name;
  var newsTemplate;
  var settings = {
    dots: false,
    infinite: false,
    accessibility: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (data.length > 0) {
    newsTemplate = data.map(function (item, index) {
      return (
        <div key={index}>
          <Event data={item} />
        </div>
      );
    });
  }
  return (
    <div className="news">
      <div className="title-add-option">
        <Link to="/eventscat/1/1" className="link-eventscat">
          {name}
        </Link>
      </div>
      <Slider {...settings}>{newsTemplate}</Slider>
    </div>
  );
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events1: [],
      events2: [],
      events3: [],
      events4: [],
      events5: [],
    };
  }

  async componentDidMount() {
    var category = 1;
    var currentPage = 1;
    const events1 = await getEventsCategory({ category, currentPage });
    this.setState({
      events1: events1.data.docs,
    });

    category = 2;
    const events2 = await getEventsCategory({ category, currentPage });
    this.setState({
      events2: events2.data.docs,
    });

    category = 3;
    const events3 = await getEventsCategory({ category, currentPage });
    this.setState({
      events3: events3.data.docs,
    });

    category = 4;
    const events4 = await getEventsCategory({ category, currentPage });
    this.setState({
      events4: events4.data.docs,
    });

    category = 5;
    const events5 = await getEventsCategory({ category, currentPage });
    this.setState({
      events5: events5.data.docs,
    });
  }

  render() {
    const { events1, events2, events3, events4, events5 } = this.state;
    return (
      <div className="content">
        <div className="big add-option-big">
          <Events name={"Mĩ thuật"} data={events1} />
          <Events name={"Cho trẻ em"} data={events2} />
          <Events name={"Văn học"} data={events3} />
          <Events name={"Âm nhạc"} data={events4} />
          <Events name={"Nhiếp ảnh, phim, video"} data={events5} />
        </div>
        <WhatsNew />
      </div>
    );
  }
}
export default Categories;
