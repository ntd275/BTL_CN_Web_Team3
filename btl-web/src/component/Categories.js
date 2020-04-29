import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import SlideCategories from "./SlideCategories";

class Categories extends Component {
  render() {
    return (
      <div className="content">
        <div className="big add-option-big">
          <div className="news">
            <div className="category-box">
              <div className="title">
                <a href>Mĩ thuật</a>
              </div>

              <div>
                <ul className="pagination">
                  <li>
                    <a href="123">
                      <img
                        src="https://hanoigrapevine.com/wp-content/themes/Newspaper/images/icons/similar-left@2x.png"
                        alt=""
                        className="img-pre-article"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="34123">
                      <img
                        src="https://hanoigrapevine.com/wp-content/themes/Newspaper/images/icons/similar-right@2x.png"
                        alt=""
                        className="img-next-article"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <SlideCategories />
          </div>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default Categories;
