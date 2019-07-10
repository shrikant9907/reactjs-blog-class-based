import React, { Component, Fragment } from "react";
import './Footer.css';
class Footer extends Component {
    render() {
        return(
            <Fragment>
                {/* Start Footer Section here */}
              <footer className="bg-secondary footer_section">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-md bg-primary text-white py-3 px-3">
                      <h5 className="mb-5 font-weight-bold">CoHost</h5>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <ul className="social_icon px-3">
                        <li><a href="/test"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/test"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/test"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                    <div className="col-md px-5">
                      <h5 className="font-weight-bold text-primary">Unseful Links</h5>
                      <ul className="footer_menu_list px-0">
                        <li><a href="/test">Servers</a></li>
                        <li><a href="/test">Windos Hosting</a></li>
                        <li><a href="/test">Cloud Hosting</a></li>
                        <li><a href="/test">OS Servers</a></li>
                        <li><a href="/test">Linux Servers</a></li>
                        <li><a href="/test">Policy</a></li>
                      </ul>
                    </div>
                    <div className="col-md">
                      <h5 className="font-weight-bold text-primary">Navigational</h5>
                      <ul className="footer_menu_list px-0">
                        <li><a href="/test">Home</a></li>
                        <li><a href="/test">About</a></li>
                        <li><a href="/test">Services</a></li>
                        <li><a href="/test">Blog</a></li>
                        <li><a href="/test">Contact</a></li>
                      </ul>
                    </div>
                    <div className="col-md">
                      <h5 className="font-weight-bold text-primary">Office</h5>
                      <ul className="footer_menu_list px-0">
                        <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                        <li><i className="fas fa-phone-alt"></i><a href="/test">+2 392 3929</a></li>
                        <li><a href="/test">info@yourdomain.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center text-white">
                      <p>Copyright ©2019 All rights reserved | This template is made with  by Rishabh k Dwivedi</p>
                    </div>
                  </div>
                </div>
              </footer>
            </Fragment>
        );
    }
}export default Footer;