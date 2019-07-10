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
                      <h5 className="mb-5 font-weight-bold">Webllisto</h5>
                      <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                      <ul class="social_icon px-3">  
                        <li><a rel="noopener noreferrer" href="www.skype.in" target="_blank"><i class="fab fa-skype"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://in.linkedin.com/company/webllisto" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://twitter.com/webllisto" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.facebook.com/Webllisto-2138626132838202/?ref=page_internal" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
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
                        <li>315 Orbit Mall, Indore, Madhya Pradesh, - 452001</li>
                        <li><a href="mailto:info@webllisto.com">info@webllisto.com</a></li>
                        <li><a href="tel:+917314993378">+917314993378</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center text-white">
                      <p>Copyright ©2019 All Rights Reserved.</p>
                    </div>
                  </div>
                </div>
              </footer>
            </Fragment>
        );
    }
}export default Footer;