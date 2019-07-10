import React, { Component, Fragment } from 'react';
import './Content.css';

import Home from './home/Home';

class Content extends Component {
    render(){ 
        return( 
            <Fragment>
                {/* Content Start */}
                   <Home />
                {/* Content End */}
            </Fragment>
        );
    }
 }
 
 export default Content;
 