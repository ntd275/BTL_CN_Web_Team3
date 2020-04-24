import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../CSS/contact.css"
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="team-section">
                    <div className="person">
                        <img src="images/images4.jpg" alt="" className="person-pic" />
                        <div className="person-info">
                            <h2>Phạm Bá Đức</h2>
                            <p>FrontEnd/BackEnd</p>
                            <div className="social">
                                <a href="" target="_blank"><FaFacebookF /></a>
                                <a href="" target="_blank"><FaInstagram /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                    <div className="person">
                        <img src="images/images5.jpg" alt="" className="person-pic" />
                        <div className="person-info">
                            <h2>Nguyễn Thế Đức</h2>
                            <p>FrontEnd/BackEnd</p>
                            <div className="social">
                                <a href="" target="_blank"><FaFacebookF /></a>
                                <a href="" target="_blank"><FaInstagram /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                    <div className="person">
                        <img src="images/images6.jpg" alt="" className="person-pic" />
                        <div className="person-info">
                            <h2>Phương Trung Đức</h2>
                            <p>FrontEnd/BackEnd</p>
                            <div className="social">
                                <a href="" target="_blank"><FaFacebookF /></a>
                                <a href="" target="_blank"><FaInstagram /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Contact;