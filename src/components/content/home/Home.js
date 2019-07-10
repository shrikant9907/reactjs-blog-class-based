import React, { Component} from "react";
import './Home.css';

// import AddPerson from '../../../example/AddPerson';
// import PersonList from '../../../example/PersonList';
import PersonById from '../../../example/PersonById';
import Counter from '../../counter/counter2container';
import Card from '../../card/Card';
import AddPost from '../../blog/NewPostContainer';

class Home extends Component {
	render() {
		return(
			<div>
				{/*<!-- Banner Section Start -->*/}
			 	<section className="banner_section py-5">
			 		<div className="container">
				 		<div className="row">
				 			<div className="col-12 col-sm-6 mt-5">
							 <img className="img-fluid mb-5" src="assets/images/home_image1.png" alt="Our Main Services" />
							 </div>
				 			<div className="col-12 col-sm-6">
				 				<h1 className="main_heading mb-3 text-primary">We Create <br />Web Interfaces <br />Development</h1>
				 				<p className="mb-4">We seek out like-minded companies that share our hunger for success and empower them with cutting-edge technology.</p>
				 				<p className="mb-4">Talk to us today and together we’ll build the technology of your tomorrow.</p>
				 				<a href="#contactus" className="btn btn-primary btn-lg rounded-pill py-3 px-5 mb-5">Get in touch</a>
				 			</div>
				 		</div>
			 		</div>
			 	</section>
			 	{/*<!-- Banner Section End -->*/}

			 	{/*<!-- Section 2 Start-->*/}
			 	<section className="section_2 bg-light py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col text-center mb-5">
				 			  <h5 className="section_heading">About Us</h5>
				 			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
				 			</div>
				 		</div>
				 		<div className="row">
				 			
							{/*<!-- Card With Right Icon --*>*/}
							<Card type="iconCard" />												
				 			
				 		</div>
				 	</div>
			 	</section>
			 	{/*<!-- Section 2 end -->*/}
			 
			 	{/*<!-- Section 3 Start -->*/}
			 	<section className="section_3 bg-secondary text-center text-white py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col mb-5">
				 			  <h5 className="section_heading2">MORE THAN 12,000 WEBSITES TRUSTED HOSTED</h5>
				 			</div>
				 		</div>
				 		<div className="row">
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 			<div className="col-12 col-sm-6 col-md-3">
				 				<div className="counts_number text-bold">12,000</div>
				 				<div className="counts_text">CMS Installation</div>		 				
				 			</div>
				 		</div>
				 	</div>
			 	</section>
			 	{/*<!-- Section 3 End -->*/}


			 	{/*<!-- Section 4 Start -->*/}
			 	<section className="section_4 py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col-12 col-md-6 mb-5">
				 				<img className="img-fluid mb-5" src="assets/images/hww_img1.png" alt="Our Main Services" />
				 			  <h5 className="section_heading">What We Can Do</h5>
				 			  <p>We are a passionate, results-oriented website design, app development, graphics designer and blockchain user in India . We deliver end-to-end website design, app development, graphic design solutions that are focused on client goals and objectives. From strategy and design to graphic design and app development, our team of specialists delivers client success on every project assigned. We will help you exceed your expectations.</p>
				 			</div>
				 			<div className="col-12 col-md-6">
				 				 <div className="row">

								  	<Card type="basic" />
				 				 	
				 				 </div>				
				 			</div>
				 		</div>
				 	</div>
			 	</section>
				 {/* Section 4 End */}
				 

				{/*<!-- Section 5 Start -->*/}
					<section className="section_4 py-5 bg-light">
			 		<div className="container">
					 <div className="row">
				 			<div className="col mb-5">
				 			  <h5 className="section_heading2 text-center">Testimonials</h5>
				 			</div>
				 		</div>
				 				 <div className="row">

				 				  <Card type="testimonial" />
				 				 	 
				 				 </div>				
				 			</div>
				 		 
			 	</section>
				{/* Section 5 End */}

				{/*<!-- Section 6 Start -->*/}
				<section className="section_4 py-5 bg-light">
			 		<div className="container">
					 <div className="row">
				 			<div className="col mb-5">
				 			  <h5 className="section_heading2 text-center">Testimonials</h5>
				 			</div>
				 		</div>
				 				 <div className="row">

				 				  <Card type="pricingCard" />
				 				 	 
				 				 </div>				
				 			</div>
				 		 
			 	</section>
			 	{/* Section 6 End */} 

			 	{/*<!-- Example Start-->*/}
			 	<section className="section_2 bg-light py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col text-center mb-5">
				 			  <h5 className="section_heading">Example</h5>
				 			</div>
				 		</div>
				 		<div className="row">
						 	{/* <PersonList /> */}
							 <PersonById />
							{/* <AddPerson /> */}
							{/* <PersonList /> */}
			 				
				 		</div>
				 	</div>
			 	</section>
				 {/*<!-- Example end -->*/}
				 

				{/*<!-- Counter with Redux Start-->*/}
				<section className="section_2 bg-light py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col text-center mb-5">
				 			  <h5 className="section_heading">Counter Example</h5>
				 			</div>
				 		</div>
				 		<div className="row">
						 	 <div className="col-12 col-md-4 offset-md-4">
									<Counter />  
			   		    </div>
				 		</div>
				 	</div>
			 	</section>
				 {/*<!-- Counter end -->*/}
				

				{/*<!-- Blog Posts with Redux Start-->*/}
					<section className="section_2 bg-light py-5">
			 		<div className="container">
			 			<div className="row">
				 			<div className="col text-center mb-5">
				 			  <h5 className="section_heading">Blog Posts Example</h5>
				 			</div>
				 		</div>
				 		<div className="row">
						 	 	<div className="col-12 col-md-6">
									  <h3>Add Post</h3>
									<AddPost />  
			   		    		</div>
								<div className="col-12 col-md-6">
									<h3>Post List</h3>
								</div>
				 		</div>
				 	</div>
			 	</section>
				 {/*<!-- Blog Posts with Redux End -->*/}
				

			</div>
		);
	}
}

export default Home;