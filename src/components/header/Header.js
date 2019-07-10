import React, { Component, Fragment } from 'react';
import './Header.css';

import Navbar from '../navbars/Navbars';
import logo from '../../logo.svg';

class Header extends Component {
    render(){ 
        return(
            <Fragment>
                {/* Header Start */}
                  <header className="header_design1 fixed-top" id="header">
                      <div className="container">
                           <div className="row">
                               <Navbar brandname={this.props.brandname} logotype="image" logosrc={logo} classes="navbar navbar-expand-lg navbar-light w-100  text-uppercase" /> 
                           </div>
                     </div>
                  </header>
                  {/* Header End */}
            </Fragment>
        );
    }
 }
 
 export default Header;
 