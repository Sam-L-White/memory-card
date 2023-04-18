import React, {useState, useEffect} from "react";

const Cards = (props) => {



    return(
        <div className="flex flex-wrap gap-10 m-32 justify-center">
            {props.cards.map(card => {
                console.log(card.imageUrl)
                let cardStyle = `min-w-48 w-48 h-64 rounded-xl shadow-2xl hover:drop-shadow-[0_3px_3.5px_rgba(0,0,0,0.8)] relative flex flex-col ${card.imageUrl} bg-contain cursor-pointer`
                return(
                    <div id={card.id} onClick={props.handleCardClick} className={cardStyle}>  
                        <div className="self-center absolute -top-20 text-3xl font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center">{card.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export {Cards}