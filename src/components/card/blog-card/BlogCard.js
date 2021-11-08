import React, { Component } from "react";
import { Link } from 'react-router-dom'


class BlogCard extends Component {   
  render(){
    const { id, title, body } = this.props.post;
    return(
      <div className="col-12 col-md-4">
        <div className="card mb-5">
          <img src="https://via.placeholder.com/200x120.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ body } </p>
            <Link to={ `/blog/${id}` } className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </div>
    );
  } 
}
export default BlogCard;