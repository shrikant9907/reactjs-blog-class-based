import React, { Component, Fragment} from "react";
import './Blog.css';
 
import Card from '../../card/Card'; 
import Heading from '../../heading/Heading'; 

import  ApiServices  from  '../../../api/ApiServices'; 
const  Api  =  new  ApiServices();

class Blog extends Component {

	state = { 
		articles_status: '',
		articles: '',
		totalarticles: ''
	}

	constructor(props) {
		super(props);

		// Get API Call and State update
		Api.getData().then(result => {

			this.setState({ 
				articles_status: result.status,
				articles: result.data.articles,	
				totalarticles: result.totalResults
			 });  
				
		});	

	}

	render() {
		
		return(
		    <Fragment>
			<Heading element='h1' classes="bg-secondary text-white" text="Blog" />		
			<section id='section1' className="section_common_80_60">  
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8">
							<Card type='blogcard' data={this.state.articles} postcount="1" />
							<Card type='horizontal' data={this.state.articles} postcount="5"/>
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