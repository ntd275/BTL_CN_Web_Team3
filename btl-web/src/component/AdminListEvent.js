import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import moment from "moment";

import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import { getEventsCategory, getAllEvents } from "../API/api";
import { Link } from "react-router-dom";

const Row = (props) => {
  const event = props.event;
  return (
    <tr>
      <td>
        <a href={`/admin-event/${event.id}`}>{event.title}</a>
      </td>
      <td>
        {moment(event.start_time).format("LL")} {" - "}
        {moment(event.finish_time).format("LL")}
      </td>
      <td>{moment(event.created_at).format("LL")}</td>
    </tr>
  );
};

class AdminListEvent extends Component {
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
      flagLink: -1,
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
    console.log(this.props);
    if (this.props.match.path === "/admin-events-page/:id") {
      const currentPage = this.props.match.params.id || 1;
      if (currentPage !== this.state.pager.currentPage) {
        const events = await getAllEvents({ currentPage });

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
          currentURL: "admin-events-page",
          isLoading: false,
          flagLink: 0,
        });
      }
    } else {
      const currentPage = this.props.match.params.id || 1;
      const category = this.props.match.params.category;

      if (currentPage !== this.state.pager.currentPage) {
        const events = await getEventsCategory({ category, currentPage });

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
          currentURL: "admin-events-category/" + category,
          isLoading: false,
          flagLink: category,
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { pager, pageOfItems, currentURL, flagLink } = this.state;
    console.log(pageOfItems);

    var elmTasks = pageOfItems.map((doc, index) => {
      return <Row key={index} event={doc} index={index} />;
    });

    return (
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
        <div className="row" style={{ margin: "auto" }}>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-page/1"
          >
            Tất cả
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/1/1"
          >
            Mĩ thuật
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/2/1"
          >
            Cho trẻ em
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/3/1"
          >
            Văn học
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/4/1"
          >
            Âm nhạc
          </Button>
          <Button
            variant="secondary"
            className="mr-2"
            href="/admin-events-category/5/1"
          >
            Nhiếp ảnh, Phim, Video
          </Button>
        </div>
        <hr />
        <h3>DANH SÁCH SỰ KIỆN</h3>
        <Table bordered >
          <thead>
            <tr className="text-center">
              <th>Tên sự kiện</th>
              <th>Thời gian</th>
              <th>Ngày đăng</th>
            </tr>
          </thead>
          <tbody className="text-center">{elmTasks}</tbody>
        </Table>

        <div className="row" style={{ margin: "auto" }}>
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

export default AdminListEvent;
