
// import ModalBasic from './components/modal/basic/ModalBasic'
// <ModalBasic title="This is modal title" content="this is modal content" showclose="yes" modalid="basic_modal1" classes="modal fade basic_modal " />

import React, { Component, Fragment } from "react";
import './ModalBasic.css';
   
class BasicPopup extends Component {   

    constructor(props, context) {
        super(props, context);
    
        this.state = {
            modalId: this.props.modalid ? this.props.modalid : 'basic',
            modalTarget: this.props.modalid ? "#"+this.props.modalid : '#basic',
            modalLabel: this.props.modalid ? this.props.modalid+'Label' : 'basicLabel',
            showCloseBtn:  this.props.showclose ? 'btn btn-secondary' : 'btn btn-secondary d-none',
            showCloseSign:  this.props.showclosesign ? 'close' : 'close d-none',
            modalTitle: this.props.title,
            modalContent: this.props.content,
            showModal: "hide",
            classes: {
                btnModalOpen: 'btn btn-primary ',
                modalHeader: 'modal-header ',
                modalBody: 'modal-body ',
                modalFooter: 'modal-footer ',
            }
        };

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this); 
        this.handleChildClick = this.handleChildClick.bind(this); 

    }

    handleShowModal() {
        this.setState({showModal: 'show'});
        console.log('show');
    }

    handleHideModal() {
        this.setState({showModal: 'hide'});
        console.log('hide');
    }

    handleChildClick(event) {  
        event.stopPropagation();
    }

    render(){ 

        let classes; 
        if(!this.props.classes || this.props.classes===''){
            classes = ' modal fade';
        } else {
            classes = this.props.classes+this.state.showModal;  
        } 

        return(
            <Fragment>
            {/* <!-- Button trigger modal --> */}
            <button type="button" onClick={this.handleShowModal} className={this.state.classes.btnModalOpen}>Modal</button>

                {/* <!-- Modal --> */}
                <div onClick={this.handleHideModal} className={classes} id={this.state.modalId} tabIndex="-1" role="dialog">
                    <div onClick={this.handleChildClick} className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className={this.state.classes.modalHeader}>
                            <h5 className="modal-title" id={this.state.modalLabel}>{this.state.modalTitle}</h5>
                            <button onClick={this.handleHideModal} type="button" className={this.state.showCloseSign}><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className={this.state.classes.modalBody}>{this.state.modalContent}</div>
                        <div className={this.state.classes.modalFooter}>
                            <button onClick={this.handleHideModal} type="button" className={this.state.showCloseBtn}>Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                        </div>
                    </div>
                </div> 
            </Fragment>
        );
    }
}
export default BasicPopup;