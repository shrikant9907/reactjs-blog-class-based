import React, { Component, Fragment} from "react";
import './Career.css';
 
import Card from '../../card/Card';
import Heading from '../../heading/Heading';

class Career extends Component {
	render() {
		return(
		    <Fragment>
			<Heading element='h1' classes="bg-secondary text-white" text="Career" />		
			<section id='section1' className="section_common_80_60">  
				<div className="container">
					<div className="w_900 mx-auto">
					<div className="row">
						<div className="col-12">
							<Card />
						</div>
					</div>
					</div>
				</div>
			</section> 
			</Fragment>
		);
	}
} 

export default Career; 