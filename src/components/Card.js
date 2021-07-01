import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            {/* <img className="screenshot" src={props.image} alt="screenshot" /> */}
            <div className="container">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Card
