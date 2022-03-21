import React, { useState } from 'react'
import "./Card.scss";

const Card = ({category}) => {
    const [showOptions, setShowOptions] = useState(false)
    
    return (
        <div className="card-container" onClick={ () => setShowOptions(!showOptions)}>
            {showOptions ? (
                <ul className="card-list">
                    { category.options.map((option, index) => {
                        return <li key={option}>{option}</li>
                    })}
                </ul>
                 ) : (
                <div>          
                    <img src={category.img} className="card-img" alt="card-img" />
                    <p className="title" >{category.name}</p>
                </div>
                )
            }
        </div>
    )
}

export default Card;
