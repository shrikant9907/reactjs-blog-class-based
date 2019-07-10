import React, { Component, Fragment } from "react";
import './Basic.css';

import Image from '../../images/Images';   
   
class BasicCard extends Component {   

    render(){

        let classes; 
        if(!this.props.data.classes || this.props.data.classes===''){
            classes = 'card mb-3';
        } else {
            classes = this.props.data.classes; 
        } 

        return(
            <Fragment>
   
                <div className={classes}>
                    <div className="mx-auto text-center">
                        <Image src={this.props.data.imgsrc} alt={this.props.data.imgalt} classes="card-img-top" />
                        <div className="card-icon position-absolute">
                            <i className="fas fa-quote-left"></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-title font-weight-bold m_b_20">{this.props.data.title}</div>
                        <div className="card-text m_b_20">{this.props.data.text}</div>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default BasicCard;