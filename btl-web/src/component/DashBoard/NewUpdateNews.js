import React, { Component } from "react";
import "../../CSS/calendarpage.css";
import "../../CSS/dashboard.css";
import moment from "moment";

import Table from "react-bootstrap/Table";
import { newestNews, changeStatusEvent } from "../../API/api";
import Select from "react-select";

class NewUpdateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewestNews: [],
      options: [
        { value: "pending", label: "Đang chờ duyệt" },
        { value: "approved", label: "Đã duyệt" },
      ],

      value: [],
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

  handleChange(value, id) {
    const status = value.value;
    changeStatusEvent({ status, id });
  }

  render() {
    const { dataNewestNews } = this.state;

    var elmTasks;
    if (localStorage.getItem("userType") === "admin") {
      elmTasks = dataNewestNews.map((doc, index) => {
        const id = doc.id;
        var defaultStatus;

        if (doc.allow === "pending") {
          defaultStatus = {
            label: "Đang chờ duyệt",
            value: "pending",
          };
        } else {
          defaultStatus = {
            label: "Đã duyệt",
            value: "approved",
          };
        }
        return (
          <tr>
            <td>
              <a target="blank" href="xem thử">
                {doc.name}
              </a>
            </td>
            <td>Đối tác (bổ sung)</td>
            <td>{moment(doc.created_at).format("LL")}</td>
            <td>
              <Select
                class="form-control"
                onChange={(value) => this.handleChange(value, id)}
                options={this.state.options}
                defaultValue={defaultStatus}
              />
            </td>
          </tr>
        );
      });
    } else {
      elmTasks = dataNewestNews.map((doc, index) => {
        var defaultStatus;

        if (doc.allow === "pending") {
          defaultStatus = {
            label: "Đang chờ duyệt",
            value: "pending",
          };
        } else {
          defaultStatus = {
            label: "Đã duyệt",
            value: "approved",
          };
        }

        return (
          <tr>
            <td>
              <a target="blank" href="xem thử">
                {doc.name}
              </a>
            </td>
            <td>Đối tác (bổ sung)</td>
            <td>{moment(doc.created_at).format("LL")}</td>
            <td>{defaultStatus.label}</td>
          </tr>
        );
      });
    }
    return (
      <>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>CÁC TIN TỨC MỚI CẤP NHẬT</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Tên bài báo</th>
                <th>Người đăng</th>
                <th>Ngày đăng</th>
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
