import React, { Component } from "react";
import "../CSS/adminlogin.css";
import { getInfoUser, updatePassword, updateInfoUser } from "../API/api";

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
      alertInfo: 0,
      alertPassword: 0,
    };
  }

  componentDidMount() {
    getInfoUser().then((result) => {
      this.setState({
        username: result.data.username,
        name: result.data.name,
        email: result.data.email,
      });
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateUser = () => {
    const { username, name, email } = this.state;
    if (username || name || email) {
      updateInfoUser({ username, name, email }).then((result) => {
        if (result.data.message !== "") {
          this.setState({
            alertInfo: 1,
          });
        } else {
          this.setState({
            alertInfo: 2,
          });
        }
      });
    } else {
      this.setState({
        alertInfo: 3,
      });
    }
  };

  onUpdatePassword = () => {
    const { renewpassword, newpassword, password } = this.state;
    if ((renewpassword && newpassword, password)) {
      if (newpassword !== renewpassword) {
        this.setState({
          alertPassword: 1,
        });
      } else {
        updatePassword({ newpassword }).then((result) => {
          if (result.data.message === "Success") {
            this.setState({
              alertPassword: 2,
            });
          }
        });
      }
    } else {
      this.setState({
        alertPassword: 3,
      });
    }
  };

  elmAlertPassword = () => {
    let { alertPassword } = this.state;
    if (alertPassword === 1)
      return (
        <div class="alert alert-danger" role="alert">
          Mật khẩu nhắc lại không đúng!
        </div>
      );
    else if (alertPassword === 2)
      return (
        <div class="alert alert-success" role="alert">
          Thay đổi mật khẩu thành công!
        </div>
      );
    else if (alertPassword === 3) {
      return (
        <div class="alert alert-danger" role="alert">
          Hãy nhập đầy đủ thông tin!
        </div>
      );
    } else return <></>;
  };

  elmAlertInfo = () => {
    let { alertInfo } = this.state;
    console.log(alertInfo);
    if (alertInfo === 2)
      return (
        <div class="alert alert-danger" role="alert">
          Cập nhật thông tin không thành công!
        </div>
      );
    else if (alertInfo === 1)
      return (
        <div class="alert alert-success" role="alert">
          Cập nhật thành công!
        </div>
      );
    else if (alertInfo === 3) {
      return (
        <div class="alert alert-danger" role="alert">
          Hãy nhập đầy đủ thông tin!
        </div>
      );
    } else return <></>;
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="admin">
          <div className="container-login">
            <div className="row-login">
              <h4>Thông tin tài khoản</h4>
              {this.elmAlertInfo()}
              <div className="input-group input-group-icon">
                <input
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  placeholder={this.state.username}
                />
                <div className="input-icon">
                  <i className="fa fa-user" />
                </div>
              </div>

              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder={this.state.name}
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
                  placeholder={this.state.email}
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

              {this.elmAlertPassword()}

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
