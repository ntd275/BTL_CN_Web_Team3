import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../../CSS/calendarpage.css";
import "../../CSS/dashboard.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  getAllEvents,
  AllEvents,
  AllNews,
  statisticEvents,
  statisticNews,
} from "../../API/api";

class PostCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   { name: "Tháng 1", Event: 4000, New: 2400 },
      //   { name: "Tháng 2", Event: 3000, New: 1398 },
      //   { name: "Tháng 3", Event: 2000, New: 9800 },
      //   { name: "Tháng 4", Event: 2780, New: 3908 },
      //   { name: "Tháng 5", Event: 1890, New: 4800 },
      //   { name: "Tháng 6", Event: 2390, New: 3800 },
      //   { name: "Tháng 7", Event: 3490, New: 4300 },
      // ],
      numberEvents: "",
      numberNews: "",
      flag: 1,
      data: [],
    };
  }

  async componentDidMount() {
    // const numberEvents = await (await AllEvents()).data.length;
    // this.setState({
    //   numberEvents: numberEvents,
    // });

    // const numberNews = await (await AllNews()).data.length;
    // this.setState({ numberNews: numberNews });

    this.statisticPost();
  }

  async statisticPost() {
    const { flag } = this.state;
    const dataEvents = await (await statisticEvents({ flag })).data;
    const dataNews = await (await statisticNews({ flag })).data;
    var data = [];
    //...//
    this.state({
      data: data,
    });
  }

  onClick = (flag) => {
    this.setState({
      flag: flag,
    });
    this.statisticPost();
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            onClick={() => {
              this.onClick(1);
            }}
          >
            Tuần
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            onClick={() => {
              this.onClick(2);
            }}
          >
            Tháng
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            onClick={() => {
              this.onClick(3);
            }}
          >
            Năm
          </Button>
        </div>
        <hr />
        <h3>TỔNG QUAN</h3>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ResponsiveContainer className="chart" height={400}>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Event"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="New" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div class="card" style={{ width: "40%" }}>
            <div class="card-body text-center">
              <h5 class="card-title text-center">
                Sự kiện đã đăng: {this.state.numberEvents}
              </h5>
              <Button
                variant="secondary"
                className="mr-2"
                href="/admin-events-page/1"
              >
                Danh sách sự kiện
              </Button>
            </div>
          </div>

          <div style={{ margin: "2%" }}></div>

          <div class="card" style={{ width: "40%" }}>
            <div class="card-body text-center">
              <h5 class="card-title text-center">
                Tin tức đã đăng: {this.state.numberNews}
              </h5>
              <Button
                variant="secondary"
                className="mr-2 text-center"
                href="/admin-news-page/1"
              >
                Danh sách tin tức
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostCharts;
