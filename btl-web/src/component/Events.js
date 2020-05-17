import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import Slide from "./Slide";
import { Link } from "react-router-dom";
import { getAllEvents, getEventsCategory } from "../API/api";
import EventComponent from "./EventComponent";

class Events extends Component {
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
      flagLink: -1
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
    if (this.props.match.path === "/eventspage/:id") {
      const currentPage = this.props.match.params.id || 1;
      if (currentPage !== this.state.pager.currentPage) {
        const events = await getAllEvents({ currentPage });

        let rank = [];
        for (let i = 1; i <= events.data.pages; i++) rank.push(i);

        this.setState({
          pageOfItems: events.data.docs,
          pager: {
            pages: rank,
            currentPage: parseInt(currentPage),
            totalPages: events.data.pages,
          },
          currentURL: "eventspage",
          isLoading: false,
          flagLink : 0  
        });
      }
    } else {
      const currentPage = this.props.match.params.id || 1;
      const category = this.props.match.params.category;
      if (currentPage !== this.state.pager.currentPage) {
        const events = await getEventsCategory({ category, currentPage });
        console.log(events);
        let rank = [];
        for (let i = 1; i <= events.data.pages; i++) rank.push(i);

        this.setState({
          pageOfItems: events.data.docs,
          pager: {
            pages: rank,
            currentPage: parseInt(currentPage),
            totalPages: events.data.pages,
          },
          currentURL: "eventscat/" + category,
          isLoading: false,
          flagLink: category
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { pager, pageOfItems, currentURL, flagLink } = this.state;
    var elmTasks = pageOfItems.map((doc, index) => {
      return <EventComponent key={index} event={doc} />;
    });
    console.log(flagLink)
    return (
      <div className="content">
        <div className="big">
          <div className="slide">
            <Slide />
          </div>
          <div className="title">
            <a href>Danh sách sự kiện</a>
          </div>
          <hr />
          <div className="menu" style={{ marginBottom: "-30px" }}>
            <ul>
              <li>
                <Link to="/eventspage/1" className={flagLink == 0 ? "event-link" : ""}>All</Link>
              </li>
              <li>
                <Link to="/eventscat/1/1" className={flagLink == 1 ? "event-link" : ""}>Mĩ thuật</Link>
              </li>
              <li>
                <Link to="/eventscat/2/1" className={flagLink == 2 ? "event-link" : ""}>Cho trẻ em</Link>
              </li>
              <li>
                <Link to="/eventscat/3/1" className={flagLink == 3 ? "event-link" : ""}>Văn học</Link>
              </li>
              <li>
                <Link to="/eventscat/4/1" className={flagLink == 4 ? "event-link" : ""}>Âm nhạc</Link>
              </li>
              <li>
                <Link to="/eventscat/5/1" className={flagLink == 5 ? "event-link" : ""}>Nhiếp ảnh, Phim, Video</Link>
              </li>
            </ul>
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
                      to={`/${currentURL}/1`}
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
                      <Link
                        to={`/${currentURL}/${page}`}
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
              </nav>
            )}
          </div>
        </div>

        <WhatsNew />
      </div>
    );
  }
}

export default Events;
