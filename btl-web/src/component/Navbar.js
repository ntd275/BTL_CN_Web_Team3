import React, { Component } from 'react';
import "../CSS/navbar.css";
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="left">
                    <span><a href="#">Event</a></span>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#">Trang chủ</a></li>
                        <li><a href="#">Lịch</a></li>
                        <li><a href="#">Chuyên mục</a></li>
                        <li><a href="#">Tin tức</a></li>
                        <li><a href="#">Đối tác</a></li>
                        <li><a href="#">Liên hệ</a></li>
                        <li><a href="#">Tìm kiếm</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;