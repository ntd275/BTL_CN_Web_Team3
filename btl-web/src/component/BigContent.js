import React, { Component } from "react";

import { FaComments } from "react-icons/fa";
import WhatsNew from "./WhatsNew";
import Slide from "./Slide";
import { Link } from "react-router-dom";
class BigContent extends Component {
  render() {
    return (
      <div className="content">
        <div className="big">
          <div className="slide">
            <Slide />
          </div>
          <div className="listevent">
            <div className="title">
              <a href>Danh sách sự kiện</a>
            </div>
            <hr />
            <div className="menu">
              <ul>
                <li>
                  <Link to="/eventspage/1">All</Link>
                </li>
                <li>
                  <Link to="/eventscat/1/1">Mĩ thuật</Link>
                </li>
                <li>
                  <Link to="/eventscat/2/1">Cho trẻ em</Link>
                </li>
                <li>
                  <Link to="/eventscat/3/1">Văn học</Link>
                </li>
                <li>
                  <Link to="/eventscat/4/1">Âm nhạc</Link>
                </li>
                <li>
                  <Link to="/eventscat/5/1">Nhiếp ảnh, Phim, Video</Link>
                </li>
              </ul>
            </div>
            <div className="mainrow">
              <div className="card-normal">
                <a href="#">
                  <img src="images/images1.jpg" alt="abc" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
              <div className="card-normal card2">
                <a href="#">
                  <img src="./images/images2.jpg" alt="" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Corporis harum inventore eos
                  unde dicta minima rem rerum quo maxime qui! Sint magnam,
                  quisquam ea dolorem obcaecati doloremque maiores asperiores
                  mollitia?
                </p>
              </div>
            </div>
            <div className="row-normal">
              <div className="card1">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
              <div className="card1 card2">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
            </div>
            <div className="row-normal">
              <div className="card1">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
              <div className="card1 card2">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
            </div>
            <div className="row-normal">
              <div className="card1">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
              <div className="card1 card2">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
            </div>
            <div className="row-normal">
              <div className="card1">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
              <div className="card1 card2">
                <img src="images/images1.jpg" alt="" />
                <div className="about">
                  <a href="">
                    <h4>Nghệ thuật trong thời kì Corona</h4>
                  </a>
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="news">
            <div className="title">
              <a href>Tin tức mới nhất</a>
            </div>
            <hr />
            <div className="row-normal">
              <div className="card-normal">
                <a href="#">
                  <img src="images/images1.jpg" alt="abc" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
              <div className="card-normal card2">
                <a href="#">
                  <img src="images/images2.jpg" alt="" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
            </div>
            <div className="row-normal">
              <div className="card-normal">
                <a href="#">
                  <img src="images/images1.jpg" alt="abc" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
              <div className="card-normal card2">
                <a href="#">
                  <img src="images/images2.jpg" alt="" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
            </div>
            <div className="row-normal">
              <div className="card-normal">
                <a href="#">
                  <img src="images/images1.jpg" alt="abc" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
              <div className="card-normal card2">
                <a href="#">
                  <img src="images/images2.jpg" alt="" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
            </div>
            <div className="row-normal">
              <div className="card-normal">
                <a href="#">
                  <img src="images/images1.jpg" alt="abc" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
              <div className="card-normal card2">
                <a href="#">
                  <img src="images/images2.jpg" alt="" />
                  <h3>Triển lãm nghệ thuật hửng nắng</h3>
                </a>
                <div className="about">
                  <div className="date" style={{ fontStyle: "italic" }}>
                    03/04/2020
                  </div>
                  <div>
                    <FaComments />
                  </div>
                  <div className="count">0</div>
                </div>
                <p>
                  02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức
                  cộng đồng về hội chứng tự kỷ
                </p>
              </div>
            </div>
          </div>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default BigContent;
