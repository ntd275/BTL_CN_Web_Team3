import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";

class TaskBar extends Component {
  render() {
    return (
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          <Button variant="secondary" className="mr-2">
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
              <Dropdown.Item href="#/action-1">Tạo sự kiện</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Danh sách sự kiện</Dropdown.Item>
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
              <Dropdown.Item href="#/action-2">Danh sách tin tức</Dropdown.Item>
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
              <Dropdown.Item href="#/action-1">Tài khoản của tôi</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tạo tài khoản</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Danh sách tài khoản
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="secondary" className="mr-2">
            Đăng xuất
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskBar;
