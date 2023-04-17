import React, {useState} from "react";

const Cards = (props) => {

    return(
        <div>
            {props.cards.map(card => {
                return(
                    <div>{card.name}</div>
                )
            })}
            <button onClick={props.shuffleCards}>SHUFFLE</button>
        </div>
    )
}

export {Cards}