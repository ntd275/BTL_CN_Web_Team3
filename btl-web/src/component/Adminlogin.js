import React, { Component } from "react";
import "../CSS/adminlogin.css";
import { checkSignin } from "../API/api";
import { Redirect } from "react-router-dom";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
      alert: 0,
    };
  }

  signin = () => {
    var { username, password } = this.state;

    if (username && password) {
      checkSignin({ username, password }).then((result) => {
        if (result.data.accessToken) {
          const accessToken = result.data.accessToken;
          const refreshToken = result.data.refreshToken;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          this.props.setSignin(true);
          this.setState({
            redirectToReferrer: true,
          });
        } else {
          this.setState({
            alert: 1,
          });
        }
      });
    } else {
      this.setState({
        alert: 2,
      });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  elmAlert = () => {
    let { alert } = this.state;
    if (alert === 1)
      return (
        <div class="alert alert-danger" role="alert">
          Sai tài khoản mật khẩu!
        </div>
      );
    else if (alert === 2)
      return (
        <div class="alert alert-danger" role="alert">
          Hãy nhập đầy đủ thông tin!
        </div>
      );
    else return <></>;
  };

  render() {

    var { redirectToReferrer } = this.state;
    let { from } = this.props.state || { from: { pathname: "/dashboard" } };
    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div className="admin" style={{marginTop: '120px'}}>
        <div className="container-login">
          <div className="row-login">
            <h4>Đăng nhập</h4>
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
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={this.onChange}
              />
              <div className="input-icon">
                <i className="fa fa-key" />
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="submit"
                style={{ paddingLeft: "0" }}
                onClick={this.signin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
