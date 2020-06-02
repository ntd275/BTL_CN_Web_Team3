import React, { Component } from "react";
import "../CSS/adminlogin.css";

class AdminAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      status: "",
      renewpassword: "",
      newpassword: "",
      email: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateUser = () => {};

  onUpdatePassword = () => {};

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="admin">
          <div className="container-login">
            <div className="row-login">
              <h4>Thông tin tài khoản</h4>
              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder="Tên tài khoản"
                  name="username"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>

              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder="Tên đối tác"
                  name="name"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>

              <div className="input-group input-group-icon">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>

              <div className="input-group input-group-icon">
                <input
                  type="submit"
                  style={{ paddingLeft: "0" }}
                  onClick={this.onUpdateUser}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="admin">
          <div className="container-login">
            <div className="row-login">
              <h4>Thay đổi mật khẩu</h4>
              <div className="input-group input-group-icon">
                <input
                  type="password"
                  placeholder="Mật khẩu cũ"
                  name="password"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>
              
              <div className="input-group input-group-icon">
                <input
                  type="password"
                  placeholder="Mật khẩu mới"
                  name="newpassword"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>
              
              <div className="input-group input-group-icon">
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  name="renewpassword"
                  onChange={this.onChange}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>
              
              <div className="input-group input-group-icon">
                <input
                  type="submit"
                  style={{ paddingLeft: "0" }}
                  onClick={this.onUpdatePassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminAccount;
