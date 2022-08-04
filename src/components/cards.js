import React from 'react'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import star from '../images/Star.png'
export default function Cards() {
  return (
    <div className='cardsection'>
        <div className="cardbox">
            <img src={card2} alt="" />
            <div className="cardinfo">
                <img src={star} alt="error" />
                <span>5.0 (6) •USA</span>
            </div>
            <span>Life lessons with Katie Zaferes</span>
            <span>From $136 / person</span>
        </div>
        <div className="cardbox">
            <img src={card3} alt="" />
            <div className="cardinfo">
                <img src={star} alt="error" />
                <span>5.0 (30) •USA</span>
            </div>
            <span>Learn wedding photography</span>
            <span>From $125 / person</span>
        </div>
        <div className="cardbox">
            <img src={card1} alt="" />
            <div className="cardinfo">
                <img src={star} alt="error" />
                <span>4.8 (2) •USA</span>
            </div>
            <span>Group Mountain Biking</span>
            <span>From $50 / person</span>
        </div>
    </div>
  )
}
