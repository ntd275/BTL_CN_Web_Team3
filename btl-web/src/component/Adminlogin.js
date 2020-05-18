import React, { Component } from 'react';
import "../CSS/adminlogin.css"

class Adminlogin extends Component {
    render() {
        return (
            <div className="admin">
                <div className="container-login">
                <form>
                    <div className="row-login">
                        <h4>Admin Login</h4>
                        <div className="input-group input-group-icon">
                            <input type="text" placeholder="Full Name" />
                            <div className="input-icon"><i className="fa fa-user" /></div>
                        </div>
                        <div className="input-group input-group-icon">
                            <input type="password" placeholder="Password" />
                            <div className="input-icon"><i className="fa fa-key" /></div>
                        </div>
                        <div className="input-group input-group-icon">
                            <input type="submit" name="Đăng nhập" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Adminlogin;