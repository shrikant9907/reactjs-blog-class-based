import React, { Component, Fragment } from "react";
import './Listing.css';

import Arrowlist from '../../lists/arrowlist/Arrowlist';   
   
class ListingCard extends Component {   

    render(){
        console.log(this.props.data.listing);
        return(
            <Fragment>
   
                {/* <!-- Card Start Here --> */}
                <div className="card mb-3 listing_card rounded-0">
                    <div className="card-header py-3 bg-white shadow1 rounded-0"><i className="fas fa-stopwatch pr-3"></i>{this.props.data.title}</div>
                    <div className="card-body py-0 shadow2">
                        <Arrowlist classes="list-group" data={this.props.data.listing} itemclasses="position-relative list-unstyled py-3 border-bottom pr-4" />
                    </div>	
                </div>
                {/* <!-- Card End Here --> */}
            </Fragment>
        );
    }
}
export default ListingCard;