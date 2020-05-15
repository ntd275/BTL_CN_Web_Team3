import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import New from "./NewComponent";

class Search extends Component {
  render() {
    return (
      <div className="content">
        <div className="big add-option-big">
          <div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                style={{ width: "85%" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-danger my-sm-0"
                style={{ backgroundColor: "#9acd32", border: "none" }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="news">
            <New />
            <New />
            <New />
          </div>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default Search;
