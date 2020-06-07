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
  AllEvents,
  AllNews,
  statisticEvents,
  statisticNews,
} from "../../API/api";

class PostCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const numberEvents = await (await AllEvents()).data.length;
    this.setState({
      numberEvents: numberEvents,
    });

    const numberNews = await (await AllNews()).data.length;
    this.setState({ numberNews: numberNews });

    await this.statisticPost();
  }

  async statisticPost(flag = 1) {
    var dataEvents = await (await statisticEvents({ flag })).data;
    var dataNews = await (await statisticNews({ flag })).data;
    var mode = "";
    switch (flag) {
      case 1:
        mode = "Tuần ";
        break;
      case 2:
        mode = "Tháng ";
        break;
      case 3:
        mode = "Năm ";
        break;
      default:
        mode = "Tuần ";
        break;
    }

    var data = [];

    for (let i = 0; i < dataEvents.length; i++) {
      let temp = {
        id: true,
        _id: dataEvents[i]._id,
        count: dataEvents[i].count,
      };
      data.push(temp);
    }

    for (let i = 0; i < dataNews.length; i++) {
      let temp = {
        id: false,
        _id: dataNews[i]._id,
        count: dataNews[i].count,
      };
      data.push(temp);
    }

    function compare(a, b) {
      const weekA = a._id;
      const weekB = b._id;
      let comparison = 0;
      if (weekA > weekB) {
        comparison = 1;
      } else if (weekA < weekB) {
        comparison = -1;
      }
      return comparison;
    }

    data.sort(compare);

    for (let i = 1; i < data.length; i++) {
      if (data[i - 1]._id === data[i]._id) {
        if (data[i - 1].id !== data[i].id) {
          if (data[i - 1].id === true) {
            data[i - 1] = {
              name: mode + data[i - 1]._id,
              Event: data[i - 1].count,
              New: data[i].count,
            };
            data.splice(1, data[i - 1]);
          } else {
            data[i - 1] = {
              name: mode + data[i - 1]._id,
              Event: data[i].count,
              New: data[i - 1].count,
            };
            data.splice(1, data[i - 1]);
          }
        } else {
          if (data[i - 1].id === true) {
            data[i - 1] = {
              name: mode + data[i - 1]._id,
              Event: data[i - 1].count + data[i].count,
              New: 0,
            };

            data.splice(1, data[i - 1]);
          } else {
            data[i - 1] = {
              name: mode + data[i - 1]._id,
              Event: 0,
              New: data[i - 1].count + data[i].count,
            };

            data.splice(1, data[i - 1]);
          }
        }
      } else {
        if (data[i - 1].id === true) {
          data[i - 1] = {
            name: mode + data[i - 1]._id,
            Event: data[i - 1].count,
            New: 0,
          };

          data.splice(1, data[i - 1]);
        } else {
          data[i - 1] = {
            name: mode + data[i - 1]._id,
            Event: 0,
            New: data[i - 1].count,
          };
        }
      }
    }

    this.setState({
      data: data,
    });
  }

  onClick = (flag) => {
    this.statisticPost(flag);
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
