import React, { Component, Fragment} from "react";
import './Career.css';
 
import Card from '../../card/Card';

class About extends Component {
	render() {
		return(
		    <Fragment>
			<h1 class="page-main-heading">About</h1>
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

export default About; 