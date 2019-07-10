import React, { Component, Fragment } from "react";
import './Post.css';

import Button from '../buttons/Button';

class NewPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      author: ''
    }
    
    // Formal Approch to bind the handler
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  } 
  
  // Handle On Change
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Handle On Submit
  handleSubmit(event){ 
    event.preventDefault();
    if(this.state.title.trim() && this.state.content.trim() && this.state.author.trim()) {
      // console.log(this.state);
      this.props.onAddPost(this.state);    
      this.handleReset();
    }
   }

   // Handle Reset
   handleReset() {
     this.setState({
        title: '',
        content: '',
        author: ''
     })
   }

   render() {
     return (
      <Fragment>
        <div className="card px-4 py-5">
          <form action="" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <input className="w-100 px-1" type="text" value={this.state.title} name="title" placeholder="Post Title" onChange={this.handleOnChange} />
            </div>
            <div className="form-group"> 
              <textarea className="w-100 px-1" value={this.state.content} name="content" placeholder="Post Content" onChange={this.handleOnChange} />
            </div>
            <div className="form-group mb-4">
              <input className="w-100 px-1" type="text" value={this.state.author} name="author" placeholder="Post Author" onChange={this.handleOnChange} />
            </div>
            <div className="form-group mb-0">
              <div className="form-row">
                <div className="col">
                  <Button btnTypes="submit" classes="btn btn-primary w-100" label="Add Post"/> 
                </div>
                <div className="col"> 
                  <Button btnTypes="reset" classes="btn btn-secondary w-100" label="Reset" onClick={this.handleReset} /> 
                </div>
              </div>
            </div>
          </form>
        </div>
      </Fragment>  
     );
   }

}

export default NewPost;