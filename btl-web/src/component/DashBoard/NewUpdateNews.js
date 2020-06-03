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

import Table from "react-bootstrap/Table";
import { newestNews } from "../../API/api";

class NewUpdateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewestNews: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const dataNewestNews = await newestNews();
    this.setState({
      dataNewestNews: dataNewestNews.data,
    });
  }

  render() {
    const { dataNewestNews } = this.state;

    var elmTasks = dataNewestNews.map((doc, index) => {
      return (
        <tr>
          <td>
            <a href={`/admin-event/`}>{doc.name}</a>
          </td>
          <td>NATO</td>
          <td>{doc.status}</td>
        </tr>
      );
    });
    return (
      <>
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
            <tbody className="text-center">{elmTasks}</tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default NewUpdateNews;
