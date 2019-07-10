import React, { Component, Fragment } from "react";
       
class BasicList extends Component {
    render() {
        
        let lists; 
        lists = this.props.data.map(sdata => <li className={this.props.itemclasses} key={sdata.id}><i className="fas fa-plus"></i>{sdata.content}</li>);

        return( 
            <Fragment>
                <ul className={this.props.classes}>
                    {lists}
                </ul>
            </Fragment>
        );
    }
}
export default BasicList;