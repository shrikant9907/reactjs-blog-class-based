import React, { Component, Fragment } from "react";
import '../Card.css';

import Image from '../../images/Images';   
   
class Testimonial extends Component {   

    render(){

        let classes; 
        if(!this.props.data.classes || this.props.data.classes===''){
            classes = 'card mb-3 pt-3 testimonials_card2';
        } else {
            classes = this.props.data.classes; 
        } 

        return(
            <Fragment>
                <div className={classes}>
                    <div className="mx-auto text-center py-3">
                        <Image src={this.props.data.imgsrc} alt={this.props.data.imgalt} classes="card_image rounded-circle img-thumbnail w_100" />
                        <div className="card-icon position-absolute">
                            <i className="fas fa-quote-left"></i>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <div className="card-text m_b_20">{this.props.data.text}</div>
                        <div className="card-title font-weight-bold m_b_20">{this.props.data.person}</div>
                        <div className="text-secondary m_b_20"><small>{this.props.data.company}</small></div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Testimonial;