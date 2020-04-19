import React, { Component } from 'react';
import "../CSS/navbar.css";
class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="logo">Group 3</h2>
                <input type="checkbox" name id="chk" />
                <label htmlFor="chk" className="show-menu-btn">
                    <i className="fas fa-ellipsis-h" />
                </label>
                <ul className="menu">
                    <a href="#">Trang chủ</a>
                    <a href="#">Lịch</a>
                    <a href="#">Chuyên mục</a>
                    <a href="#">Tin tức</a>
                    <a href="#">Đối tác</a>
                    <a href="#">Liên hệ</a>
                    <a href="#">Tìm kiếm</a>
                    <label htmlFor="chk" className="hide-menu-btn">
                        <i className="fas fa-times" />
                    </label>
                </ul>
            </div>
        );
    }
}

export default Navbar;