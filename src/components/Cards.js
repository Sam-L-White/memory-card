import React, {useState, useEffect} from "react";

const Cards = (props) => {

    const {shuffleCards, cards} = props

    return(
        <div>
            {props.cards.map(card => {
                return(
                    <div clicked={false} id={card.id} onClick={props.handleCardClick}>{card.name}</div>
                )
            })}
        </div>
    )
}

export {Cards}