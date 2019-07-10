import React, { Component, Fragment } from "react";
import './Card.css';

import BasicCard from './basic/Basic';
import TestimonialCard from './testimonial/Testimonial';
import IconCard from './iconcard/IconCard';
import PricingCard from './pricing/PricingCard';

class Card extends Component {
 
    state = { 
        testidata: [
            {
                id: '1',
                person: 'Shrikant Yadav',
                company: 'Company Name',
                imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
                imgalt: 'Shrikant Image',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                id: '2',
                person: 'Shrikant Yadav',
                company: 'Company Name',
                imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
                imgalt: 'Shrikant Image',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            } 
        ],
        basicdata: [
            {
                id: '1',
                title: 'Card Title',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Card Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                id: '2',
                title: 'Company Name',
                imgsrc: 'https://picsum.photos/id/891/300/200',
                imgalt: 'Shrikant Image',
                showimg: true,
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            }
             
        ],
        iconCarddata: [
            {
                id: '1',
                title: 'Card Title',
                icon: <i className="fas fa-cloud"></i>,
                iconLocation: 'right',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                id: '2',
                title: 'Company Name',
                icon: <i className="fas fa-cloud"></i>,
                iconLocation: 'right',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            } 
             
        ],
        pricingCarddata: [
            {
                id: '1',
                title: 'Card Title',
                icon: <i className="fas fa-cloud"></i>,
                iconLocation: 'right',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
                id: '2',
                title: 'Company Name',
                icon: <i className="fas fa-cloud"></i>,
                iconLocation: 'right',
                text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            } 
             
        ]
    }  

    render(){

        let card;
        if (this.props.type==='testimonial') {
            card =  this.state.testidata.map(sdata => <div className="col-12 col-sm-4" key={sdata.id}><TestimonialCard data={sdata} key={sdata.id} id={sdata.id} /></div>);
        } else if (this.props.type==='basic') {
            card =  this.state.basicdata.map(sdata => <div className="col-12 col-sm-6" key={sdata.id}><BasicCard data={sdata} key={sdata.id} id={sdata.id} /></div>);
        } else if (this.props.type==='iconCard') {
            card =  this.state.iconCarddata.map(sdata => <div className="col-12 col-sm-6" key={sdata.id}><IconCard data={sdata} key={sdata.id} id={sdata.id} /></div>);
        }else if (this.props.type==='pricingCard') {
            card =  this.state.pricingCarddata.map(sdata => <div className="col-12 col-sm-3" key={sdata.id}><PricingCard data={sdata} key={sdata.id} id={sdata.id} /></div>);
        }else {
            card = <p>Cart type not given.</p>
        }

        return(
            <Fragment>
                {card}
            </Fragment>
        );
    }
}
export default Card;