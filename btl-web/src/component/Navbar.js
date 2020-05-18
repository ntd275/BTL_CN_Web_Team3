import React, { Component } from 'react';
import "../CSS/navbar.css";
import { FaTimes, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="logo">Group 3</h2>
                <input type="checkbox" name id="chk" />
                <label htmlFor="chk" className="show-menu-btn">
                    <FaEllipsisH />
                </label>
                <ul className="menu">
                    <Link to="/" exact>
                        <a>Trang chủ</a>
                    </Link>
                    <Link to="/calendar" exact>
                        <a href="#">Lịch</a>
                    </Link>
                    <Link to="/categories" exact>
                        <a href="#">Chuyên mục</a>
                    </Link>
                    <Link to="/news" exact>
                        <a href="#">Tin tức</a>
                    </Link>
                    <Link to="/partners" exact>
                        <a href="#">Đối tác</a>
                    </Link>

                    <Link to="/contact" >
                        <a href="#">Liên hệ</a>
                    </Link>
                    <Link to="/find" >
                        <a href="#">Tìm kiếm</a>
                    </Link>
                    <label htmlFor="chk" className="hide-menu-btn">
                        <FaTimes />
                    </label>

                </ul>
            </div>
        );
    }
}

export default Navbar;