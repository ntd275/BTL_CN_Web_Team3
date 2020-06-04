import React, { Component } from "react";
import "../CSS/adminlogin.css";
import { createUser } from "../API/api";

class AdminCreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      repassword: "",
      alert: 0,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = () => {
    const { username, email, password, repassword, name } = this.state;

    if (username && email && password && repassword && name) {
      if (password !== repassword) {
        this.setState({
          alert: 2,
        });
      } 
      else {
        createUser({ username, email, password, name }).then((result) => {
          if (result.data.message === "Success") {
            this.setState({
              alert: 3,
            });
          } else {
            this.setState({
              alert: 4,
            });
          }
        });
      }
    } else {
      this.setState({
        alert: 1,
      });
    }
  };

  elmAlert = () => {
    let { alert } = this.state;
    console.log(alert);
    if (alert === 1)
      return (
        <div class="alert alert-danger" role="alert">
          Nhập đầy đủ thông tin!
        </div>
      );
    else if (alert === 2)
      return (
        <div class="alert alert-danger" role="alert">
          Mật khẩu nhập lại sai!
        </div>
      );
    else if (alert === 3) {
      return (
        <div class="alert alert-success" role="alert">
          Tạo tại khoản thành công!
        </div>
      );
    } else if (alert === 4) {
      return (
        <div class="alert alert-danger" role="alert">
          Tên tài khoản đã tồn tại!
        </div>
      );
    } else return <></>;
  };

  render() {
    return (
      <div className="admin" style={{ marginBottom: "600px" }}>
        <div className="container-login">
          <div className="row-login">
            <h4>Thông tin tài khoản</h4>
            {this.elmAlert()}
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
                type="password"
                placeholder="Mật khẩu"
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
                placeholder="Nhập lại mật khẩu"
                name="repassword"
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
                onClick={this.createUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminCreateAccount;
