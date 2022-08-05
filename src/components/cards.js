import React from 'react'
import star from '../images/Star.png'
export default function Cards(props) {
    return (
        <div className="cardbox">
            <img src={props.cardimg} alt="error" />
            <div className="cardinfo">
                <img src={star} alt="error" />
                <span>{props.rating} ({props.review}) •{props.country}</span>
            </div>
            <span>{props.title}</span>
            <span><span className='bold'>From {props.price}</span> / person</span>
        </div>
    )
}
