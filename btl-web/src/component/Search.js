import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import EventComponent from "./EventComponent";
import { searchEvents } from "../API/api";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
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
      flag: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, flag: false });
  };

  async onSearch() {
    const { keyword } = this.state;
    const id = 1;
    const events = await searchEvents({ keyword, id });
    const currentPage = parseInt(events.data.page);
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
        currentPage: parseInt(events.data.page),
        totalPages: events.data.pages,
      },
      flag: true,
    });
  }

  async onClickPagination(id) {
    console.log(id);
    const { keyword } = this.state;
    const events = await searchEvents({ keyword, id });
    const currentPage = parseInt(events.data.page);
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
        currentPage: parseInt(events.data.page),
        totalPages: events.data.pages,
      },
    });
  }

  render() {
    const { keyword, pageOfItems, flag, pager } = this.state;
    
    var elmTasks;
    if (pageOfItems.length === 0 && keyword !== "" && flag) {
      elmTasks = <p>Không tìm thấy sự kiện nào!</p>;
    } else {
      elmTasks = pageOfItems.map((doc, index) => {
        return <EventComponent key={index} event={doc} />;
      });
    }

    return (
      <div className="content">
        <div className="big add-option-big">
          <div>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                style={{ width: "85%" }}
                type="search"
                placeholder={keyword}
                aria-label="Search"
                name="keyword"
                onChange={this.onChange}
              />
              <button
                className="btn btn-danger my-sm-0"
                style={{ backgroundColor: "#9acd32", border: "none" }}
                type="submit"
                onClick={() => {
                  this.onSearch();
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="news">{flag && elmTasks}</div>

          <div
            className={
              flag && pager.pages && pager.pages.length && pageOfItems.length
                ? ""
                : "display-add-option"
            }
          >
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li
                  className={`page-item first-item ${
                    pager.currentPage === 1 ? "disabled page-link" : "page-link"
                  }`}
                >
                  <span
                    className="page-link"
                    onClick={() => this.onClickPagination(1)}
                  >
                    First
                  </span>
                </li>

                <li
                  className={`page-item previous-item ${
                    pager.currentPage === 1 ? "disabled page-link" : "page-link"
                  }`}
                >
                  <span
                    className="page-link"
                    onClick={() =>
                      this.onClickPagination(pager.currentPage - 1)
                    }
                  >
                    Previous
                  </span>
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
                    <span
                      className="page-link"
                      onClick={() => this.onClickPagination(page)}
                    >
                      {page}
                    </span>
                  </li>
                ))}

                <li
                  className={`page-item next-item ${
                    pager.currentPage === pager.totalPages
                      ? "disabled page-link"
                      : "page-link"
                  }`}
                >
                  <span
                    onClick={() =>
                      this.onClickPagination(pager.currentPage + 1)
                    }
                    className="page-link"
                  >
                    Next
                  </span>
                </li>

                <li
                  className={`page-item last-item ${
                    pager.currentPage === pager.totalPages
                      ? "disabled page-link"
                      : "page-link"
                  }`}
                >
                  <span
                    onClick={() => this.onClickPagination(pager.totalPages)}
                    className="page-link"
                  >
                    Last
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default Search;
