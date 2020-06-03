import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";

import Table from "react-bootstrap/Table";

class AdminActiveEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <hr />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>CÁC SỰ KIỆN ĐANG CHỜ DUYỆT</h3>
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
                <td>Đang chờ duyệt</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default AdminActiveEvent;
