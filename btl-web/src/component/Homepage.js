import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import Slide from "./Slide";
import { Link } from "react-router-dom";
import { newestEvents, newestNews } from "../API/api";
import moment from "moment";

const ChildNewestEvent = (props) => {
  const data = props.data;
  const key = props.id;
  console.log(data, key);
  return (
    <div className="row-normal">
      <div className="card1">
        <img src={data[key].image} alt="" />
        <div className="about">
          <a href={`/events/${data[key].id}`}>
            <h4>{data[key].title}</h4>
          </a>
          <small style={{ fontStyle: "italic" }}>
            Thời gian: {moment(data[key].start_time).format("LL")} -{" "}
            {moment(data[key].finish_time).format("LL")}
            &nbsp;
          </small>
        </div>
      </div>
      <div className="card1 card2">
        <img src={data[key].image} alt="" />
        <div className="about">
          <a href={`/events/${data[key + 1].id}`}>
            <h4>{data[key + 1].title}</h4>
          </a>
          <small style={{ fontStyle: "italic" }}>
            Thời gian: {moment(data[key + 1].start_time).format("LL")} -{" "}
            {moment(data[key + 1].finish_time).format("LL")}
            &nbsp;
          </small>
        </div>
      </div>
    </div>
  );
};

const ChildNewestNew = (props) => {
  const data = props.data;
  const key = props.id;
  return (
    <div className="row-normal">
      <div className="card-normal">
        <a href={`/news/${data[key].id}`}>
          <img src={data[key].image} alt="abc" />
          <h3>{data[key].title}</h3>
        </a>
        <div style={{ display: "flex" }}>
          <div className="date" style={{ fontStyle: "italic" }}>
            <small>{moment(data[key].Created_date).format("LL")} &nbsp;</small>
          </div>
        </div>
        <a href={`/news/${data[key + 1].id}`}>
          <div>
            <h3 style={{ marginBottom: "0" }}>{data[key].name}</h3>
          </div>
        </a>
        <p>{data[key].content[0].paragraph.substr(0, 130)}...</p>
      </div>
      <div className="card-normal card2">
        <a href={`/news/${data[key + 1].id}`}>
          <img src={data[key + 1].image} alt="abc" />
          <h3>{data[key + 1].title}</h3>
        </a>
        <div style={{ display: "flex" }}>
          <div className="date" style={{ fontStyle: "italic" }}>
            <small>
              {moment(data[key + 1].Created_date).format("LL")} &nbsp;
            </small>
          </div>
        </div>
        <a href={`/news/${data[key + 1].id}`}>
          <div>
            <h3 style={{ marginBottom: "0" }}>{data[key].name}</h3>
          </div>
        </a>
        <p>{data[key + 1].content[0].paragraph.substr(0, 130)}...</p>
      </div>
    </div>
  );
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewestEvents: [],
      dataNewestNews: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const dataNewestEvents = await newestEvents();
    const dataNewestNews = await newestNews();
    this.setState({
      dataNewestEvents: dataNewestEvents.data,
      dataNewestNews: dataNewestNews.data,
    });
  }

  render() {
    const { dataNewestEvents, dataNewestNews } = this.state;
    if (dataNewestEvents.length === 0) return null;
    else {
      return (
        <div className="content">
          <div className="big">
            <div className="slide">
              <Slide />
            </div>

            <div className="listevent">
              <div className="title">
                <a href>Danh sách sự kiện</a>
              </div>
              <hr />
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/eventspage/1">All</Link>
                  </li>
                  <li>
                    <Link to="/eventscat/1/1">Mĩ thuật</Link>
                  </li>
                  <li>
                    <Link to="/eventscat/2/1">Cho trẻ em</Link>
                  </li>
                  <li>
                    <Link to="/eventscat/3/1">Văn học</Link>
                  </li>
                  <li>
                    <Link to="/eventscat/4/1">Âm nhạc</Link>
                  </li>
                  <li>
                    <Link to="/eventscat/5/1">Nhiếp ảnh, Phim, Video</Link>
                  </li>
                </ul>
              </div>
              <div className="mainrow">
                <div className="card-normal">
                  <a href={`/events/${dataNewestEvents[0].id}`}>
                    <img src={dataNewestEvents[0].image} alt="abc" />
                    <h3>{dataNewestEvents[0].title}</h3>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    <small>
                      Thời gian:{" "}
                      {moment(dataNewestEvents[0].start_time).format("LL")} -{" "}
                      {moment(dataNewestEvents[0].finish_time).format("LL")} -
                      &nbsp;
                    </small>
                  </div>
                  <div>
                    <small style={{ fontStyle: "italic" }}>
                      Địa điểm: {dataNewestEvents[0].address}
                    </small>
                  </div>
                  <p>
                    {dataNewestEvents[0].content[0].paragraph.substr(0, 180)}...
                  </p>
                </div>
                <div className="card-normal card2">
                  <a href={`/events/${dataNewestEvents[1].id}`}>
                    <img src={dataNewestEvents[1].image} alt="abc" />
                    <h3>{dataNewestEvents[1].title}</h3>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    <small>
                      Thời gian:{" "}
                      {moment(dataNewestEvents[1].start_time).format("LL")} -{" "}
                      {moment(dataNewestEvents[1].finish_time).format("LL")} -
                      &nbsp;
                    </small>
                  </div>
                  <div>
                    <small style={{ fontStyle: "italic" }}>
                      Địa điểm: {dataNewestEvents[1].address}
                    </small>
                  </div>
                  <p>
                    {dataNewestEvents[1].content[0].paragraph.substr(0, 180)}...
                  </p>
                </div>
              </div>

              <ChildNewestEvent data={dataNewestEvents} id={2} />
              <ChildNewestEvent data={dataNewestEvents} id={4} />
              <ChildNewestEvent data={dataNewestEvents} id={6} />
            </div>

            <div className="news">
              <div className="title">
                <a href>Tin tức mới nhất</a>
              </div>
              <hr />
              <ChildNewestNew data={dataNewestNews} id={0} />
              <ChildNewestNew data={dataNewestNews} id={2} />
              <ChildNewestNew data={dataNewestNews} id={4} />
              <ChildNewestNew data={dataNewestNews} id={6} />
            </div>
          </div>
          <WhatsNew />
        </div>
      );
    }
  }
}
export default Homepage;
