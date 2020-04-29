import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import Partner from "./Partner";

class Partners extends Component {
  render() {
    return (
      <div className="content">
        <div className="big add-option-big">
          <div><h3>Đối tác liên hệ</h3></div>
          <div className="news">
            <Partner />
            <Partner />
            <Partner />
          </div>

          <nav aria-label="Page navigation example" style={{marginTop: '5px'}}>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default Partners;
