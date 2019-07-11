import React, { Component, Fragment } from "react";
       
class Arrowlist extends Component {
    render() {
        
        let lists; 
        lists = this.props.data.map(sdata => <li className={this.props.itemclasses} key={sdata.id}>{sdata.content} <i className="fas fa-chevron-right position-absolute text-primary"></i></li>);

        return( 
            <Fragment>
                <ul className={this.props.classes}>
                    {lists}
                </ul>
            </Fragment>
        );
    }
}
export default Arrowlist;