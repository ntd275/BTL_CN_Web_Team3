import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import moment from "moment";

import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import { getAllEvents, changeStatusEvent, getEventsCategory, getNews } from "../API/api";
import { Link } from "react-router-dom";
import Select from "react-select";

class AdminListNew extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      pager: {
        totalItems: 0,
        currentPage: 0,
        pageSize: 8,
        totalPages: 0,
        startPage: 1,
        endPage: 0,
        startIndex: -8,
        endIndex: -1,
        pages: [],
      },
      pageOfItems: [],
      currentURL: "",
      isLoading: true,

      options: [
        { value: "pending", label: "Đang chờ duyệt" },
        { value: "approved", label: "Đã duyệt" },
      ],

      value: [],
    };
  }

  componentDidMount() {
    !this._isMounted && this.loadPage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.loadPage();
    }
  }

  async loadPage() {
    if (this.props.match.path === "/admin-news-page/:id") {
      const currentPage = this.props.match.params.id || 1;
      if (currentPage !== this.state.pager.currentPage) {
        const events = await getNews({ currentPage });

        let rank = [];
        if (events.data.pages <= 5) {
          for (let i = 1; i <= events.data.pages; i++) rank.push(i);
        } else {
          if (currentPage < 5) {
            for (let i = 1; i <= 5; i++) rank.push(i);
          } else {
            if (parseInt(currentPage) + 2 <= events.data.pages) {
              for (let i = 2; i >= -2; i--) {
                rank.push(currentPage - i);
              }
            } else {
              for (let i = 2; i >= -2; i--) {
                if (currentPage - i <= events.data.pages) {
                  rank.push(currentPage - i);
                }
              }
            }
          }
        }

        this.setState({
          pageOfItems: events.data.docs,
          pager: {
            pages: rank,
            currentPage: parseInt(currentPage),
            totalPages: events.data.pages,
          },
          currentURL: "admin-news-page",
          isLoading: false,
          flagLink: 0,
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange(value, id) {
    const status = value.value;
    changeStatusEvent({ status, id });
  }
  render() {
    const { pager, pageOfItems, currentURL } = this.state;
    console.log(pageOfItems);

    var elmTasks;
    if (localStorage.getItem("userType") === "admin") {
      elmTasks = pageOfItems.map((doc, index) => {
        const id = doc.id;
        var defaultStatus;

        if (doc.allow === "pending") {
          defaultStatus = {
            label: "Đang chờ duyệt",
            value: "pending",
          };
        } else {
          defaultStatus = {
            label: "Đã duyệt",
            value: "approved",
          };
        }
        return (
          <tr>
            <td>
              <a target="blank" href="xem thử">
                Triển lãm nghệ thuật hửng nắng
              </a>
            </td>
            <td>
              {" "}
              {moment(doc.start_time).format("LL")} {" - "}
              {moment(doc.finish_time).format("LL")}
            </td>
            <td>{moment(doc.created_at).format("LL")}</td>
            <td>
              <Select
                class="form-control"
                onChange={(value) => this.handleChange(value, id)}
                options={this.state.options}
                defaultValue={defaultStatus}
              />
            </td>
          </tr>
        );
      });
    } else {
      elmTasks = pageOfItems.map((doc, index) => {
        var defaultStatus;

        if (doc.allow === "pending") {
          defaultStatus = {
            label: "Đang chờ duyệt",
            value: "pending",
          };
        } else {
          defaultStatus = {
            label: "Đã duyệt",
            value: "approved",
          };
        }

        return (
          <tr>
            <td>
              <a target="blank" href="xem thử">
                Triển lãm nghệ thuật hửng nắng
              </a>
            </td>
            <td>
              {" "}
              {moment(doc.start_time).format("LL")} {" - "}
              {moment(doc.finish_time).format("LL")}
            </td>
            <td>{moment(doc.created_at).format("LL")}</td>
            <td>{defaultStatus.label}</td>
          </tr>
        );
      });
    }

    return (
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 dashboard-event">
        <h3>DANH SÁCH SỰ KIỆN</h3>

        <Table bordered>
          <thead>
            <tr className="text-center">
              <th>Tên sự kiện</th>
              <th>Thời gian</th>
              <th>Ngày đăng</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody className="text-center">{elmTasks}</tbody>
        </Table>

        <div style={{ float: "right" }}>
          {pager.pages && pager.pages.length && (
            <ul className="pagination">
              <li
                className={`page-item first-item ${
                  pager.currentPage === 1 ? "disabled page-link" : "page-link"
                }`}
              >
                <Link to={`/${currentURL}/1`} className="page-link">
                  First
                </Link>
              </li>

              <li
                className={`page-item previous-item ${
                  pager.currentPage === 1 ? "disabled page-link" : "page-link"
                }`}
              >
                <Link
                  to={`/${currentURL}/${pager.currentPage - 1}`}
                  className="page-link"
                >
                  Previous
                </Link>
              </li>

              {pager.pages.map((page) => (
                <li
                  key={page}
                  className={`page-item number-item ${
                    pager.currentPage === page
                      ? "active page-link"
                      : "page-link"
                  }`}
                >
                  <Link to={`/${currentURL}/${page}`} className="page-link">
                    {page}
                  </Link>
                </li>
              ))}

              <li
                className={`page-item next-item ${
                  pager.currentPage === pager.totalPages
                    ? "disabled page-link"
                    : "page-link"
                }`}
              >
                <Link
                  to={`/${currentURL}/${pager.currentPage + 1}`}
                  className="page-link"
                >
                  Next
                </Link>
              </li>

              <li
                className={`page-item last-item ${
                  pager.currentPage === pager.totalPages
                    ? "disabled page-link"
                    : "page-link"
                }`}
              >
                <Link
                  to={`/${currentURL}/${pager.totalPages}`}
                  className="page-link"
                >
                  Last
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default AdminListNew;