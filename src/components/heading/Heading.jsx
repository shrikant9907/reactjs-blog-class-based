import React, { Component, Fragment} from "react";

class Heading extends Component {

	render() {

        // Heading Element
        let element = 'h1';    

        // Default Heading Classes
        let classes = 'page-heading text-center f_30_40 p_y_40 ';

        // Heading Classes
        if(this.props.classes && this.props.classes !== '') {
            classes += 'bg-secondary text-white ';
        }

        // Heading Element
        if(this.props.element && this.props.element !== '') {
            element = this.props.element;
        }
  
        if(element==='h1') {
		    return(<Fragment><h1 className={classes}>{this.props.text}</h1></Fragment>);
        }

        if(element==='h2') {
		    return(<Fragment><h2 className={classes}>{this.props.text}</h2></Fragment>);
        }

        if(element==='h3') {
		    return(<Fragment><h3 className={classes}>{this.props.text}</h3></Fragment>);
        }

        if(element==='h4') {
		    return(<Fragment><h4 className={classes}>{this.props.text}</h4></Fragment>);
        }

        if(element==='h5') {
		    return(<Fragment><h5 className={classes}>{this.props.text}</h5></Fragment>);
        }

        if(element==='h6') {
		    return(<Fragment><h6 className={classes}>{this.props.text}</h6></Fragment>);
        } 
    }
    
} 

export default Heading; 