import React, { Component } from "react";
import "../CSS/adminlogin.css";
import { checkSignin } from "../API/api";
import { Redirect } from "react-router-dom";

class AdminCreateAccount extends Component {
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
        <div className="admin" style={{marginBottom: '600px'}}>
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
                  placeholder="Số điện thoại"
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
                  placeholder="Địa chỉ"
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
                  placeholder="Mật khẩu"
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
                  placeholder="Nhập lại mật khẩu"
                  name="username"
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
                  onClick={this.signin}
                />
              </div>
              
            </div>
          </div>
        </div>
    );
  }
}

export default AdminCreateAccount;
