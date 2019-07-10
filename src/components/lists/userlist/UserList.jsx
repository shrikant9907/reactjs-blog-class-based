import React, { Component, Fragment } from "react";
       
class UserList extends Component {
    render() {

    let lists; 
    lists = this.props.data.map(user => <li className={this.props.itemclasses} key={user.id}>{user.name} | {user.email} | {user.username} <br /> <small>{user.address.city}</small></li>);

        return( 
            <Fragment>
                <ul className={this.props.classes}>
                    {lists}
                </ul>
            </Fragment>
        );
    }
}
export default UserList;