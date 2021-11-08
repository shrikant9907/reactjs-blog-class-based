import React, { Component} from "react";
import './Home.css';
 
import BlogCard from '../../card/blog-card/BlogCard'; 

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pcount: 6
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + 'posts')
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  loadMorePosts = (e) => {
    e.preventDefault();
    if (this.state.pcount <= 97) {
      this.setState({
        pcount: this.state.pcount +  3
      })
    }
  }

	render() {
    const { posts, pcount } = this.state;
		return(
			<div>
 
			 	<section className="banner_section py-5">
			 		<div className="container">
				 		<div className="row">
				 			<div className="col-12">
				 				<h1 className="main_heading mb-3 text-primary">Lorem ipsum dolor sit amet</h1>
				 				<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				 				<a href="#contactus" className="btn btn-primary mb-3">Get in touch</a>
				 			</div>
				 		</div>
			 		</div>
			 	</section>
 
			 	<section className="blog-posts bg-light py-5">
			 		<div className="container">
            <h3 className="mb-5 text-center">Blog Posts</h3>
				 		<div className="row">
               {
                 posts && posts.slice(0, pcount).map((post) => {
                  return <BlogCard key={post.id} post={post} />
                 })
               }
				 		</div>
             <div className="text-center"><button className="btn btn-lg btn-outline-primary" onClick={(e) => this.loadMorePosts(e)}>Load More</button></div>
				 	</div>
			 	</section>
 
			</div>
		);
	}
}

export default Home;