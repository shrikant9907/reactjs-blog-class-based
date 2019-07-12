import React, { Component, Fragment } from "react";
import './BlogCard.css'; 

import Image from '../../images/Images';   
    
class BlogCard extends Component {   

    render(){

        let classes; 
        if(!this.props.classes || this.props.classes===''){
            classes = 'card m_b_30 rounded-0 btn_shw_card border-0';
        } else {
            classes = this.props.classes; 
        } 

        return(
            <Fragment> 
   
                <div className={classes}>
                    <div className="card-header position-relative p-0">
                        <Image src={this.props.imgsrc} alt={this.props.imgalt} classes="img-fluid" />
                        <div className="header-text position-absolute text-white bg-transparent border-0 w-100 p_20">
                            <span className="m_b_10 f_12_14 bg-primary py-1 px-2 d-inline-block">Digtal</span>
                            <h3>{this.props.title}</h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-metadata f_12_14 m_b_10">
                            <a href="#" className="text-dark mr-4"><i className="fas fa-external-link-alt"></i> {this.props.author}</a> 
                            <a href="#" className="text-dark mx-4"><i className="fas fa-stopwatch"></i> {this.props.publishedAt}</a>
                            {/* <a href="#" className="text-dark ml-4"><i className="fas fa-envelope"></i>0</a> */}
                        </div>
                        <div className="text-title mt-2">
                            <p className="text-muted f_14_20 mb-0">{this.props.text} 
                            <a href={this.props.fullurl} target="_blank" className="text-primary m_l_10 f_12_14">Read More.....</a></p>
                        </div>
                    </div>  
                </div>  

            </Fragment>
        );
    } 
}
export default BlogCard;