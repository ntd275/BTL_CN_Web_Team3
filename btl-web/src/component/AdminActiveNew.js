import React, { Component } from "react";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import Table from "react-bootstrap/Table";
import {
  changeStatusEvent,
  adminActiveNews,
  changeStatusNew,
} from "../API/api";
import { Link } from "react-router-dom";
import Select from "react-select";
import moment from "moment";

class AdminActiveNew extends Component {
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

  handleChange(value, id) {
    const status = value.value;
    changeStatusNew({ status, id });
  }

  async loadPage() {
    const currentPage = this.props.match.params.id || 1;
    console.log(this.props.match.params.id);

    const events = await adminActiveNews({ currentPage });
    console.log(events);

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
      currentURL: "admin-active-new",
      isLoading: false,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { pager, pageOfItems, currentURL } = this.state;
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
              <a target="blank" href={`/demo-new/${doc.id}`}>
                {doc.name}
              </a>
            </td>
            <td>Đối tác (bổ sung)</td>
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
              <a href={`/admin-new/${doc.id}`}>{doc.name}</a>
            </td>
            <td>Đối tác (bổ sung)</td>
            <td>{moment(doc.created_at).format("LL")}</td>
            <td>{defaultStatus.label}</td>
          </tr>
        );
      });
    }

    return (
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 dashboard-event">
        <hr />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>CÁC TIN TỨC ĐANG CHỜ DUYỆT</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th className="w-50 p-3">Tên tin tức</th>
                <th>Người đăng</th>
                <th>Ngày đăng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">{elmTasks}</tbody>
          </Table>
        </div>

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

export default AdminActiveNew;
