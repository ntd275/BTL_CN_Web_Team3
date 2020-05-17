import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import Slide from "./Slide";
import { Link } from "react-router-dom";
import { getNews } from "../API/api";
import NewComponent from "./NewComponent";

class News extends Component {
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
      isLoading: true
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
    const currentPage = this.props.match.params.id || 1;

    if (currentPage !== this.state.pager.currentPage) {
      const news = await getNews({ currentPage });
      var rank = [];
      for (let i = 1; i <= news.data.pages; i++) rank.push(i);

      this.setState({
        pageOfItems: news.data.docs,
        pager: {
          pages: rank,
          currentPage: parseInt(currentPage),
          totalPages: news.data.pages,
        },
        isLoading: false
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { pager, pageOfItems } = this.state;
    var elmTasks = pageOfItems.map((doc, index) => {
      return <NewComponent key={index} new={doc} />;
    });

    return (
      <div className="content">
        <div className="big">
          <div className="slide">
            <Slide />
          </div>

          <div className="news">{elmTasks}</div>

          <div className="row">
            {pager.pages && pager.pages.length && (
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    className={`page-item first-item ${
                      pager.currentPage === 1
                        ? "disabled page-link"
                        : "page-link"
                    }`}
                  >
                    <Link
                      to="/newspage/1"
                      className="page-link"
                    >
                      First
                    </Link>
                  </li>

                  <li
                    className={`page-item previous-item ${
                      pager.currentPage === 1
                        ? "disabled page-link"
                        : "page-link"
                    }`}
                  >
                    <Link
                      to={`/newspage/${pager.currentPage - 1}`}
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
                      <Link
                        to={`/newspage/${page}`}
                        className="page-link"
                      >
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
                      to={`/newspage/${pager.currentPage + 1}`}
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
                      to={`/newspage/${pager.totalPages}`}
                      className="page-link"
                    >
                      Last
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>

        <WhatsNew />
      </div>
    );
  }
}

export default News;
