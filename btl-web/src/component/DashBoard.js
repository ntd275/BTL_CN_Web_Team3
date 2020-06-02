import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
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
import Table from "react-bootstrap/Table";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Tháng 1", Event: 4000, New: 2400, amt: 2400 },
        { name: "Tháng 2", Event: 3000, New: 1398, amt: 2210 },
        { name: "Tháng 3", Event: 2000, New: 9800, amt: 2290 },
        { name: "Tháng 4", Event: 2780, New: 3908, amt: 2000 },
        { name: "Tháng 5", Event: 1890, New: 4800, amt: 2181 },
        { name: "Tháng 6", Event: 2390, New: 3800, amt: 2500 },
        { name: "Tháng 7", Event: 3490, New: 4300, amt: 2100 },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-page/1"
          >
            Tuần
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/1/1"
          >
            Tháng
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/2/1"
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
              <h5 class="card-title text-center">Sự kiện đã đăng: 2134</h5>
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
              <h5 class="card-title text-center">Tin tức đã đăng: 2134</h5>
              <Button
                variant="secondary"
                className="mr-2 text-center"
                href="/admin-events-page/1"
              >
                Danh sách tin tức
              </Button>
            </div>
          </div>
        </div>
        <hr />
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>CÁC SỰ KIỆN MỚI CẤP NHẬT</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Tên sự kiện</th>
                <th>Người đăng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đang chờ duyệt</td>
              </tr>
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đang chờ duyệt</td>
              </tr>
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đã duyệt</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <hr />
        
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>CÁC TIN TỨC MỚI CẤP NHẬT</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Tên bài báo</th>
                <th>Người đăng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đang chờ duyệt</td>
              </tr>
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đang chờ duyệt</td>
              </tr>
              <tr>
                <td>
                  <a href={`/admin-event/`}>Triển lãm nghệ thuật hửng nắng</a>
                </td>
                <td>CTV</td>
                <td>Đã duyệt</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-page/1"
          >
            Tuần
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/1/1"
          >
            Tháng
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/2/1"
          >
            Năm
          </Button>
        </div>
        <hr />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>THỐNG KÊ SỐ LƯỢNG VIEW</h3>
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
    );
  }
}

export default DashBoard;
