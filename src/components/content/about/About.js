import React, { Component, Fragment} from "react";
import './About.css';
 
// import Card from '../../card/Card';
import Heading from '../../heading/Heading';

class About extends Component {
	render() {
		return(
		    <Fragment>
			<Heading element='h1' classes="bg-secondary text-white" text="About Webllisto" />		
			<section id='section1' className="section_common_40_20">  
				<div className="container">
					<div className="w_900 mx-auto">
					<div className="row">
						<div className="col-12">
							<p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
						</div>
					</div>
					</div>
				</div>
			</section> 
			</Fragment>
		);
	}
} 

export default About; 