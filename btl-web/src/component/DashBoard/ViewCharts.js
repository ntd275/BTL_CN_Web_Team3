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
  allViewEvents,
  allViewNews,
  statisticViewEvents,
  statisticViewNews,
} from "../../API/api";

class ViewCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      numberViewEvents: 0,
      numberEvents: 0,
    };
  }

  async componentDidMount() {
    const numberViewEvents = await allViewEvents();
    console.log(numberViewEvents.l);
    if (numberViewEvents.data.length !== 0) {
      this.setState({
        numberViewEvents: numberViewEvents.data[0].count,
      });
    }

    const numberViewNews = await allViewNews();
    if (numberViewNews.data.length !== 0) {
      this.setState({
        numberViewNews: numberViewNews.data[0].count,
      });
    }

    await this.statisticView();
  }

  async statisticView(flag = 1) {
    var dataEvents = await statisticViewEvents({ flag });
    var dataNews = await statisticViewNews({ flag });
    console.log(dataEvents, dataNews);
    if (dataEvents !== undefined && dataNews !== undefined) {
      dataEvents = dataEvents.data;
      dataNews = dataNews.data;

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
    }

    this.setState({
      data: data,
    });
  }

  onClick = (flag) => {
    this.statisticView(flag);
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <br />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
          <h3>THỐNG KÊ SỐ LƯỢNG VIEW</h3>
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
        </div>
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div class="card" style={{ width: "40%" }}>
            <div class="card-body text-center">
              <h5 class="card-title text-center">
                Lượt xem sự kiện: {this.state.numberViewEvents}
              </h5>
              <Button
                variant="secondary"
                className="mr-2"
                href="/admin-events-page/1"
              >
                Thống kê chi tiết (bổ sung)
              </Button>
            </div>
          </div>

          <div style={{ margin: "2%" }}></div>

          <div class="card" style={{ width: "40%" }}>
            <div class="card-body text-center">
              <h5 class="card-title text-center">
                Lượt xem tin tức: {this.state.numberViewNews}
              </h5>
              <Button
                variant="secondary"
                className="mr-2 text-center"
                href="/admin-events-page/1"
              >
                Thống kê chi tiết (bổ sung)
              </Button>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default ViewCharts;
