import React, { Component } from 'react';
import "../CSS/navbar.css";
import { FaComments } from "react-icons/fa";
class BigContent extends Component {
    render() {
        return (
            <div className="content">
                <div className="big">
                    <div className="slide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet accusantium sit neque facilis ratione officiis ipsa distinctio corrupti laborum ipsam, vitae obcaecati porro recusandae id soluta quaerat necessitatibus numquam.
                        <h1>Chỗ này là slide, bổ sung sau</h1>
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
                        <div className="mainrow">
                            <div className="card">
                                <a href="#">
                                    <img src="images/images1.jpg" alt="abc" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                            <div className="card card2">
                                <a href="#">
                                    <img src="./images/images2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum inventore eos unde dicta minima rem rerum quo maxime qui! Sint magnam, quisquam ea dolorem obcaecati doloremque maiores asperiores mollitia?
                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card1">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                            <div className="card1 card2">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card1">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                            <div className="card1 card2">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card1">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                            <div className="card1 card2">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card1">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                            <div className="card1 card2">
                                <img src="images/images1.jpg" alt="" />
                                <div className="about">
                                    <a href><h4>Nghệ thuật trong thời kì Corona</h4></a>
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <div className="title"><a href>Tin tức mới nhất</a></div>
                        <hr />
                        <div className="row">
                            <div className="card">
                                <a href="#">
                                    <img src="images/images1.jpg" alt="abc" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                            <div className="card card2">
                                <a href="#">
                                    <img src="images/images2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card">
                                <a href="#">
                                    <img src="images/images1.jpg" alt="abc" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                            <div className="card card2">
                                <a href="#">
                                    <img src="images/images2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card">
                                <a href="#">
                                    <img src="images/images1.jpg" alt="abc" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                            <div className="card card2">
                                <a href="#">
                                    <img src="images/images2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card">
                                <a href="#">
                                    <img src="images/images1.jpg" alt="abc" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                            <div className="card card2">
                                <a href="#">
                                    <img src="images/images2.jpg" alt="" />
                                    <h3>Triển lãm nghệ thuật cửng dái</h3>
                                </a>
                                <div className="about">
                                    <div className="date" style={{ fontStyle: 'italic' }}>03/04/2020</div>
                                    <FaComments/>
                                    <div className="count">0</div>
                                </div>
                                <p>
                                    02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng đồng về hội chứng tự kỷ
                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small">
                    <div className="title"><a href>Có gì hôm nay</a></div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default BigContent;