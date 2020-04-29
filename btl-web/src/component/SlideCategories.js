import React, { Component } from "react";
import { FaComments } from "react-icons/fa";
class SlideCategories extends Component {
  render() {
    return (
      <div className="row-normal">
        <div className="card-normal">
          <a href="#">
            <img src="images/images1.jpg" alt="abc" />
            <h3>Triển lãm nghệ thuật cửng dái</h3>
          </a>
          <div className="about">
            <div className="date" style={{ fontStyle: "italic" }}>
              <small>03/04/2020 </small>
            </div>
            <div>
              <FaComments />
              <small> (10)</small>
            </div>
          </div>
          <p>
            02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng
            đồng về hội chứng tự kỷ
          </p>
        </div>

        <div className="card-normal card2">
          <a href="#">
            <img src="images/images2.jpg" alt="" />
            <h3>Triển lãm nghệ thuật cửng dái</h3>
          </a>
          <div className="about">
            <div className="date" style={{ fontStyle: "italic" }}>
              <small>03/04/2020 </small>
            </div>
            <div>
              <FaComments />
              <small> (10)</small>
            </div>
          </div>
          <p>
            02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng
            đồng về hội chứng tự kỷ
          </p>
        </div>
      </div>
    );
  }
}

export default SlideCategories;
