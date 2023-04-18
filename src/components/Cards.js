import React, {useState, useEffect} from "react";

const Cards = (props) => {



    return(
        <div className="flex flex-wrap gap-10 m-32 justify-center">
            {props.cards.map(card => {
                console.log(card.imageUrl)
                let cardStyle = `min-w-48 w-48 h-64 rounded-xl hover:shadow-2xl relative flex flex-col ${card.imageUrl} bg-contain`
                return(
                    <div id={card.id} onClick={props.handleCardClick} className={cardStyle}>  
                        <div className="self-center absolute -bottom-10 text-xl">{card.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export {Cards}