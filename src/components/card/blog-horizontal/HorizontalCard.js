import React, { Component, Fragment } from "react";
import './HorizontalCard.css';

import Image from '../../images/Images';   
   
class HorizontalCard extends Component {   

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
                    <div class="row no-gutters">
                        <div className="col-12 col-md-4 text-center">
                            <Image src={this.props.data.imgsrc} alt={this.props.data.imgalt} classes="card-img-top" />
                        </div>
                        <div class="col-md-8">
                            <div className="card-body">
                                <div className="card-title font-weight-bold m_b_20">{this.props.data.title}</div>
                                <div className="card-text m_b_20">{this.props.data.text}</div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HorizontalCard;