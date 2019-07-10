import React, { Component, Fragment } from 'react';

class Counter2 extends Component {
    render() {

        const { counter, increment, decrement, reset }  = this.props;

        return (
            <Fragment>
            <div className="card mb-3">
                <div className="card-body text-center"><b className="counter_number">{counter}</b></div>
                <div className="card-footer">
                    <button className="btn btn-primary w-100 mb-2" onClick={increment} >Increment</button>
                    <button className="btn btn-secondary  w-100 mb-2" onClick={decrement} >Decrement</button>
                    <button className="btn btn-danger  w-100 mb-2" onClick={reset} >Reset</button>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Counter2; 