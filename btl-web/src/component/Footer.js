import React, { Component } from 'react';
import "../CSS/footer.css"
import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaLinkedinIn } from "react-icons/fa";
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="left-col">
                        <h1>Group 3</h1>
                        <div className="social-media">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                        <p className="rights-text">© 2020 Created By Group 3 All Rights Reserved.</p>
                    </div>
                    <div className="right-col">
                        <h1>Our Newsletter</h1>
                        <div className="border" />
                        <p className="p-padding">Enter Your Email to get our news and updates.</p>
                        <form action className="newsletter-form">
                            <input type="text" className="txtb" placeholder="Enter Your Email" />
                            <input type="submit" className="btn" defaultValue="submit" />
                        </form>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;