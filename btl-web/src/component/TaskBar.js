import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import { checkSignOut } from "../API/api";

class TaskBar extends Component {
  signOut = () => {
    checkSignOut();
    this.props.setSignin(false);

    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userType");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
  };

  render() {
    if (
      localStorage.getItem("refreshToken") &&
      localStorage.getItem("userType") === "admin"
    ) {
      return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <Button variant="secondary" className="mr-2" href="/dashboard">
              Tổng quan
            </Button>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Sự kiện
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/admin-events-page/1">
                  Danh sách sự kiện
                </Dropdown.Item>
                <Dropdown.Item href="/admin-active-event/1">
                  Danh sách sự kiện đang chờ duyệt
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Tin tức
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="/admin-news-page/1">
                  Danh sách tin tức
                </Dropdown.Item>
                <Dropdown.Item href="/admin-active-new/1">
                  Danh sách tin tức đang chờ duyệt
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Tài khoản
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/admin-account">
                  Tài khoản của tôi
                </Dropdown.Item>
                <Dropdown.Item href="/admin-create-account">
                  Tạo tài khoản
                </Dropdown.Item>
                <Dropdown.Item href="/admin-list-account/1">
                  Danh sách tài khoản
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" className="mr-2" onClick={this.signOut}>
              Đăng xuất
            </Button>
          </div>
        </div>
      );
    } else if (
      localStorage.getItem("refreshToken") &&
      localStorage.getItem("userType") === "partner"
    ) {
      return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <Button variant="secondary" className="mr-2" href="/dashboard">
              Tổng quan
            </Button>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Sự kiện
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/admin-create-event">
                  Tạo sự kiện
                </Dropdown.Item>
                <Dropdown.Item href="/admin-events-page/1">
                  Danh sách sự kiện của tôi
                </Dropdown.Item>
                <Dropdown.Item href="/admin-active-event/1">
                  Sự kiên đang chờ duyệt
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Tin tức
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Tạo tin tức</Dropdown.Item>
                <Dropdown.Item href="/admin-news-page/1">
                  Danh sách tin tức của tôi
                </Dropdown.Item>
                <Dropdown.Item href="/admin-active-new/1">
                  Tin tức đang chờ duyệt
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="mr-2"
              >
                Tài khoản
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/admin-account">
                  Tài khoản của tôi
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="secondary" className="mr-2" onClick={this.signOut}>
              Đăng xuất
            </Button>
          </div>
        </div>
      );
    } else return <div style={{ height: "50px" }}></div>;
  }
}

export default TaskBar;
