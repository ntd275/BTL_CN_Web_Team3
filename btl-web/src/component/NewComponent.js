import React, { Component } from "react";
import { FaComments } from "react-icons/fa";
import moment from "moment";
import { Link, Redirect } from "react-router-dom";

class NewComponent extends Component {
  onClick(id) {
    console.log(id);
    window.location.href = "http://localhost:3000/news/" + id;
    window.scrollTo(0, 0);
  }

  render() {
    const newspaper = this.props.new;
    return (
      <div className="row-normal" style={{ marginBottom: "0px" }}>
        <img src={newspaper.image} alt="abc" className="new-img" />
        <div className="info-new">
          <div>
            <div>
              <h3>{newspaper.name}</h3>
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
            <p>{newspaper.content[0].paragraph.substr(0, 120)}...</p>
            <button
              type="button"
              className="btn btn-danger"
              style={{ backgroundColor: "#9acd32", border: "none" }}
              onClick={() => this.onClick(newspaper.id)}
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewComponent;
