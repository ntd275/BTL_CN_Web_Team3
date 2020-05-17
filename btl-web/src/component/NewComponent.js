import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class NewComponent extends Component {
  render() {
    const newspaper = this.props.new;
    return (
      <div className="row-normal" style={{ marginBottom: "0px" }}>
        <img src={newspaper.image} alt="abc" className="new-img" />
        <div className="info-new">
          <div>
            <div>
              <h3 style={{ marginBottom: "0" }}>{newspaper.name}</h3>
            </div>
            <div style={{ display: "flex" }}>
              <div className="date" style={{ fontStyle: "italic" }}>
                <small>
                  {moment(newspaper.Created_date).format("LL")} &nbsp;
                </small>
              </div>
            </div>
          </div>

          <div>
            <p>{newspaper.content[0].paragraph.substr(0, 210)}...</p>
            <a href={`/news/${newspaper.id}`}>
              <button
                type="button"
                className="btn btn-danger"
                style={{ backgroundColor: "#9acd32", border: "none" }}
              >
                Chi tiết
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewComponent;
