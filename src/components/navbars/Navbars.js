import React, { Component, Fragment } from 'react';
import {NavLink} from "react-router-dom";

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
        logo = <span className="brand-name">{this.props.brandname}</span>
      }

      return(
        
            <Fragment>

                {/* Navbar Start */}
                  <nav className={this.props.classes}>
                   
                      <NavLink className="navbar-brand font-weight-bold d-inline-block" to="/">{logo}</NavLink>
                   
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 font-weight-bold">
                              <li className="nav-item active">
                                <NavLink className="nav-link px-4 py-4" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link px-4 py-4" to="/about-us">About Us</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link px-4 py-4" to="/work">Work</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link px-4 py-4" to="/career">Career</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link px-4 py-4" to="/blog">Blog</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link px-4 py-4" to="/contact-us">Contact Us</NavLink>
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
 