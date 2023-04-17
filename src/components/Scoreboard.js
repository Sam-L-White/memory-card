import React, {useState, useEffect} from "react";

const Scoreboard = (props) => {

    return(
        <div>
            <div>{props.score}</div>
            <div>{props.highScore}</div>
        </div>
    )
}

export {Scoreboard}