import React, { Component, Fragment } from "react";
import BasicList from "./basic/BasicList"
class List extends Component {
 
    state = { 
        listingdata: [
            {
                id:'1',
                content: "Unlimited Vendors1",
            },
            {
                id:'2',
                content: "Unlimited Vendors2",
            },
            {
                id:'3',
                content: "Unlimited Vendors3",
            },
            {
                id:'4',
                content: "Unlimited Vendors4",
            }
        ]
    }  

    render() {
        let list;
        if (this.props.type === 'basiclist') {
            list = <BasicList data={this.state.listingdata}  classes="list-group list-unstyled text-muted  mb-2 text-left" itemclasses="pb-3"/>
        } else {
            list = <p>Cart type not given.</p>
        }

        return(
            <Fragment>
                {list}
            </Fragment>
        );
    }
}
export default List;