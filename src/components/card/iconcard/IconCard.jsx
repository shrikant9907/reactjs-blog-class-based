import React, { Component, Fragment } from "react";
import './iconcard.css'
class IconCard extends Component {
    render(){
        let classes = "card mb-3 card_with_icon1 position-relative py-5 border-0 rounded rounded-2 ";
        if(this.props.data.iconLocation === 'right') {
            classes += 'right_icon';
        }
        return(
            <Fragment>
                <div className={classes}>
                    <div className="card-icon position-absolute rounded-circle text-white text-center py-3">
                        {this.props.data.icon}
                    </div>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{this.props.data.title}</h5>
                            <p className="card-text mb-0">{this.props.data.text}</p>
                        </div>
                    </div>	
            </Fragment>
        );
    }
}
export default IconCard;