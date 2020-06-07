import React, { Component } from "react";
import "../../CSS/calendarpage.css";
import "../../CSS/dashboard.css";
import Table from "react-bootstrap/Table";
import { newestEvents, changeStatusEvent } from "../../API/api";
import Select from "react-select";
import moment from "moment";

class NewUpdateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewestEvents: [],
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
    const dataNewestEvents = await newestEvents();
    this.setState({
      dataNewestEvents: dataNewestEvents.data,
    });
  }

  handleChange(value, id) {
    const status = value.value;
    changeStatusEvent({ status, id });
  }

  render() {
    const { dataNewestEvents } = this.state;

    var elmTasks;
    if (localStorage.getItem("userType") === "admin") {
      elmTasks = dataNewestEvents.map((doc, index) => {
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
                {doc.title}
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
      elmTasks = dataNewestEvents.map((doc, index) => {
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
                {doc.title}
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
          <h3>CÁC SỰ KIỆN MỚI CẤP NHẬT</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th className="w-50 p-3">Tên sự kiện</th>
                <th className="w-25 p-3">Người đăng</th>
                <th>Ngày đăng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">{elmTasks}</tbody>
          </Table>
        </div>
        <hr />
      </>
    );
  }
}

export default NewUpdateEvents;
