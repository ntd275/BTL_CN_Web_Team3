import React, { Component } from 'react';
import "../CSS/navbar.css";
import { FaComments } from "react-icons/fa";
import SlideShow from './SlideShow';
class BigContent extends Component {
    render() {
        return (
            <div className="content">
                <div className="big">
                    <div className="slide">
                        <SlideShow/>
                    </div>
                    <div className="listevent">
                        <div className="title"><a href>Danh sách sự kiện</a></div>
                        <hr />
                        <div className="menu">
                            <ul>
                                <li><a href="#">All</a></li>
                                <li><a href="#">Mĩ thuật</a></li>
                                <li><a href="#">Cho trẻ em</a></li>
                                <li><a href="#">Văn học</a></li>
                                <li><a href="#">Âm nhạc</a></li>
                                <li><a href="#">Nhiếp ảnh, Phim, Video</a></li>
                            </ul>
                        </div>
                        <div className="main">
                            <div className="card">
                                <a href="#">
                                    <img src="images/card1.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments />
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                                </p>
                            </div>
                            <div className="card">
                                <a href="#">
                                    <img src="images/card2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments />
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="title"><a href>Tin tức mới nhất</a></div>
                        <hr />
                    </div>
                </div>
                <div className="small" />
            </div>
        );
    }
}

export default BigContent;