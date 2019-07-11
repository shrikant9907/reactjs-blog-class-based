import React, { Component, Fragment} from "react";
import './Blog.css';
 
import Card from '../../card/Card'; 
import Heading from '../../heading/Heading'; 

class Blog extends Component {

	render() {
		return(
		    <Fragment>
			<Heading element='h1' classes="bg-secondary text-white" text="Blog" />		
			<section id='section1' className="section_common_80_60">  
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8">
							<Card type='blogcard' />
							<Card type='horizontal' />
						</div>
						<div className="col-12 col-md-4">
							<Card type='newsletter' />
							<Card type='listingcard' />
						</div>
					</div>
				</div>
			</section> 
			</Fragment>
		);
	}
} 

export default Blog; 