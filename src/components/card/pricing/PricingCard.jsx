import React, { Component, Fragment } from "react";
import List from '../../lists/List';

class PricingCard extends Component{
  render(){
    return(
      <Fragment>
        <div className="card border-bottom-0 border-left-0 border-top-0 rounded-0  py-3  text-center pricing_table5 mb-5 mb-lg-0">
          <div className="card-body ">

            <a href="/test" className="btn px-5 btn-success rounded-pill mb-4">FREE</a>

            <div className="text-success mb-5">Always Free</div>

            <span>Most basic features of a multi vendor store</span>
            
            <hr /> 
            
            <List type="basiclist" />
            <a href="/test" className="btn px-4 py-2 btn-success">Choose Plan</a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default PricingCard;