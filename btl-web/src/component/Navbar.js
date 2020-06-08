import React, { Component } from "react";
import "../CSS/navbar.css";
import { FaTimes, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagLink: 1,
    };
  }

  hoverNavbar(id) {
    this.setState({
      flagLink: id,
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { flagLink } = this.state;
    return (
      <div className="header">
        <h2 className="logo">Group 3</h2>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <FaEllipsisH />
        </label>
        <ul className="menu">
          <Link
            to="/"
            onClick={() => {
              this.hoverNavbar(1);
            }}
            className={flagLink === 1 ? "category-link" : ""}
          >
            Trang chủ
          </Link>
          <Link
            to="/calendar"
            onClick={() => {
              this.hoverNavbar(2);
            }}
            className={flagLink === 2 ? "category-link" : ""}
          >
            Lịch
          </Link>
          <Link
            to="/categories"
            onClick={() => {
              this.hoverNavbar(3);
            }}
            className={flagLink === 3 ? "category-link" : ""}
          >
            Chuyên mục
          </Link>
          <Link
            to="/newspage/1"
            
            onClick={() => {
              this.hoverNavbar(4);
            }}
            className={flagLink === 4 ? "category-link" : ""}
          >
            Tin tức
          </Link>
          <Link
            to="/partners"
            onClick={() => {
              this.hoverNavbar(5);
            }}
            className={flagLink === 5 ? "category-link" : ""}
          >
            Đối tác
          </Link>

          <Link
            to="/contact"
            onClick={() => {
              this.hoverNavbar(6);
            }}
            className={flagLink === 6 ? "category-link" : ""}
          >
            Liên hệ
          </Link>
          <Link
            to="/find"
            onClick={() => {
              this.hoverNavbar(7);
            }}
            className={flagLink === 7 ? "category-link" : ""}
          >
            Tìm kiếm
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
