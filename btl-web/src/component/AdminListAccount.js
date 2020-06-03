import React, { Component } from "react";
import "../CSS/adminlogin.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getAllUser, changeStatusUser } from "../API/api";
import { Link } from "react-router-dom";
import Select from "react-select";

class AdminListAccount extends Component {
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
        { value: "activate", label: "Hoạt động" },
        { value: "blocked", label: "Khoá" },
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
    if (this.props.match.path === "/admin-list-account/:id") {
      const currentPage = this.props.match.params.id || 1;

      if (currentPage !== this.state.pager.currentPage) {
        const events = await getAllUser({ currentPage });

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

        var status = [];
        for (let i = 0; i < 8; i++) {
          if (events.data.docs.status === "activate") {
            status[i] = {
              label: "Hoạt động",
              value: "activate",
            };
          } else {
            status[i] = {
              label: "Khoá",
              value: "blocked",
            };
          }
        }

        this.setState({
          pageOfItems: events.data.docs,
          pager: {
            pages: rank,
            currentPage: parseInt(currentPage),
            totalPages: events.data.pages,
          },
          currentURL: "admin-list-account",
          isLoading: false,
          flagLink: 0,
          value: status,
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange(value, id) {
    const status = value.value;
    changeStatusUser({ status, id });
  }

  render() {
    const { pager, pageOfItems, currentURL } = this.state;

    var elmTasks = pageOfItems.map((doc, index) => {
      const id = doc.id;
      var defaultStatus;

      if (doc.status === "activate") {
        defaultStatus = {
          label: "Hoạt động",
          value: "activate",
        };
      } else {
        defaultStatus = {
          label: "Khoá",
          value: "blocked",
        };
      }
      return (
        <tr>
          <td>{doc.name}</td>

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

    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-page/1"
          >
            Sắp xếp theo trạng thái
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/1/1"
          >
            Sắp xếp theo tên
          </Button>
        </div>
        <hr />
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>DANH SÁCH TÀI KHOẢN</h3>
          <Table bordered>
            <thead>
              <tr className="text-center">
                <th>Tên đối tác</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody className="text-center">{elmTasks}</tbody>
          </Table>
        </div>

        <div>
          {pager.pages && pager.pages.length && (
            <div style={{ float: "right" }}>
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
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AdminListAccount;
