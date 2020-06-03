import React, { Component } from "react";
import "../../CSS/calendarpage.css";
import "../../CSS/dashboard.css";
import Table from "react-bootstrap/Table";
import { newestEvents } from "../../API/api";

class NewUpdateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewestEvents: [],
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

  render() {
    const { dataNewestEvents } = this.state;

    var elmTasks = dataNewestEvents.map((doc, index) => {
      return (
        <tr>
          <td>
            <a href={`/admin-event/`}>{doc.title}</a>
          </td>
          <td>NATO</td>
          <td>{doc.status}</td>
        </tr>
      );
    });
    return (
      <>
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
            <tbody className="text-center">{elmTasks}</tbody>
          </Table>
        </div>
        <hr />
      </>
    );
  }
}

export default NewUpdateEvents;
