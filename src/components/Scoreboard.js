import React, {useState, useEffect} from "react";

const Scoreboard = (props) => {

    return(
        <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-5 text-white text-4xl bg-green-800 drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)] p-5">
                <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Score:</div>
                <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">{props.score}</div>
            </div>
            <div className="flex flex-row gap-5 text-white text-4xl bg-green-800 drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)] p-5">
                <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">High Score:</div>
                <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">{props.highScore}</div>
            </div>
        </div>
    )
}

export {Scoreboard}