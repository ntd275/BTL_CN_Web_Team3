import React, { Component } from "react";
import "../CSS/adminlogin.css";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

class AdminListAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
      alert: 0,
    };
  }

  render() {
    var { redirectToReferrer } = this.state;
    let { from } = this.props.state || { from: { pathname: "/dashboard" } };
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-page/1"
          >
            Sắp xếp theo trạng thái
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/1/1"
          >
            Sắp xếp theo tên
          </Button>
        </div>
        <hr />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>DANH SÁCH TÀI KHOẢN</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Tên tài khoản</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>APPLE</td>
                <td>Đang hoạt động</td>
              </tr>
              <tr>
                <td>SAMSUNG</td>
                <td>Đang hoạt động</td>
              </tr>
              <tr>
                <td>HUAWEI</td>
                <td>Đã khoá</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default AdminListAccount;
