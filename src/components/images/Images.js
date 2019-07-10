import React, { Component, Fragment } from "react";

import './Images.css';

class Image extends Component {
    render() {

        // let classes = 'img-fluid mb-5';

        return(
            <Fragment>
                <img className={this.props.classes} src={this.props.src} alt={this.props.alt} />
            </Fragment>
        );
    }
}

export default Image;