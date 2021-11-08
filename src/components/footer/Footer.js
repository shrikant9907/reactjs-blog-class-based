import React, { Component } from "react";
class Footer extends Component {
  render() {
    return(
      <>
        <footer className="bg-dark site-footer text-white  pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md py-3 px-3"> 
                <h5 className="mb-3 font-weight-bold text-uppercase">Codematra</h5>
                <p>Lorem Ipsum gravida nibh velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                <div className="social_icon px-3 d-flex unstyled-list">  
                  <a className="text-white text-decoration-none" rel="noopener noreferrer" href="https://in.linkedin.com/company/codematra" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  <a className="text-white text-decoration-none" rel="noopener noreferrer" href="https://twitter.com/codematra" target="_blank"><i className="fab fa-twitter"></i></a>
                  <a className="text-white text-decoration-none" rel="noopener noreferrer" href="https://www.facebook.com/codematra" target="_blank"><i className="fab fa-facebook-f"></i></a>
                </div>
              </div>
              <div className="col-md px-5">
                <h5 className="mb-5 font-weight-bold text-uppercase">Unseful Links</h5>
                <ul className="flist px-0">
                  <li><a className="text-white text-decoration-none" href="/test">Servers</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Windos Hosting</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Cloud Hosting</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">OS Servers</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Linux Servers</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Policy</a></li>
                </ul>
              </div>
              <div className="col-md">
                <h5 className="mb-5 font-weight-bold text-uppercase">Navigation</h5>
                <ul className="flist px-0">
                  <li><a className="text-white text-decoration-none" href="/test">Home</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">About</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Blog</a></li>
                  <li><a className="text-white text-decoration-none" href="/test">Contact</a></li>
                </ul>
              </div>
              <div className="col-md">
                <h5 className="mb-5 font-weight-bold text-uppercase">Get In Touch</h5>
                <ul className="flist px-0">
                  <li>Lorem Ipsum gravida nibh velit auctor aliquet. Aenean sollic, - 04881</li>
                  <li><a className="text-white text-decoration-none" href="mailto:info@Codematra.com">info@example.com</a></li>
                  <li><a className="text-white text-decoration-none" href="tel:+917314993378">+91 0000000000</a></li>
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
      </>
    );
  }
}

export default Footer;