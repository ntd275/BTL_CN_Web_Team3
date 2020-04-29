import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import Slide from "./Slide";
import SlideCategories from "./SlideCategories";
import New from "./New";

class News extends Component {
  render() {
    return (
      <div className="content">
        <div className="big">
          <div className="slide">
            <Slide />
          </div>

          <div className="news">
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
            <New />
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

export default News;
