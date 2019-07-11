import React, { Component, Fragment } from "react";
import './Newsletter.css';
   
class Newsletter extends Component {   

    render(){

        return(
            <Fragment>
                {/* <!-- Card Start --> */}
                <div className="card shadow1 rounded-0 mb-3 newsletter_card">
                    <div className="card-header bg-white border-bottom-1 text-uppercase text-primary font-weight-bold f_16_22">{this.props.data.title}</div>
                    <div className="card-body pb-0">
                        <p>{this.props.data.text}</p>
                        <form className="p-0 m-0">
                        <div className="form-row">
                            <div className="col-12 col-md-8">
                            <div className="form-group mb-4">
                                <input className="form-control input_design f_14_16" type="email" placeholder="Enter email address." />
                            </div>
                            </div>
                            <div className="col-12 col-md-4">
                            <input className="btn btn-primary w-100" type="button" name="submit" value="Submit" />
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                {/* <!-- Card End --> */}
            </Fragment>
        );
    }
}
export default Newsletter;