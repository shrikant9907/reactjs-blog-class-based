import React, { Component, Fragment } from 'react';
import './Navbar.css';

import Image from "../images/Images";

class Navbar extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        logotype: this.props.logotype,
        logosrc: this.props.logosrc,
        logoalt: 'Company Site Logo'
      }

    }

    render(){ 

      let logo;
      if (this.state.logotype==='image') {
        logo = <Image src={this.state.logosrc} classes="logo-image img-fluid" alt={this.state.logoalt} />
      } else {
        logo = <div className="brand-name">{this.props.brandname}</div>
      }

      return(
        
            <Fragment>

                {/* Navbar Start */}
                  <nav className={this.props.classes}>
                  
                      <a className="navbar-brand font-weight-bold d-inline-block" href="/test">
                       {logo}
                      </a>

                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 font-weight-bold">
                              <li className="nav-item active">
                                  <a className="nav-link px-4 py-4"  href="#home">Home</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link px-4 py-4" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link px-4 py-4" href="#about">Services</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link px-4 py-4" href="#about">Blog</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link px-4 py-4" href="#about">Contact</a>
                              </li>
                          </ul>  
                      </div>
                  </nav>
                  {/* Navbar End */}

            </Fragment>
        );
    }
 }
 
 export default Navbar;
 