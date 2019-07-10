import React, { Component, Fragment } from "react";
import './HorizontalCard.css';

import Image from '../../images/Images';   
   
class HorizontalCard extends Component {   

    render(){

        let classes = 'card m_b_30 ';
        if(this.props.classes || this.props.classes!==''){
            classes += this.props.classes; 
        } 
       
        return(
            <Fragment>  
                <div className={classes}>
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 text-center bg_light">
                            <Image src={this.props.data.imgsrc} alt={this.props.data.imgalt} classes="card-img-top rounded-0" />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="card-body">
                                <p className="card-text m_b_10 f_12_14"><small className="text-primary"> Tien Nguyen 2 Apr 30, 2015</small></p>
                                <div className="card-title font-weight-bold f_18_22"><a href="#" class="text-dark">{this.props.data.title}</a></div>
                                <p className="card-text m_b_10 f_12_14"><small className="text-muted"> Tien Nguyen 2 Apr 30, 2015</small></p>
                                <div className="card-text m_b_10 f_14_20">{this.props.data.text} <a href="#" class="text-primary f_12_14">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HorizontalCard;