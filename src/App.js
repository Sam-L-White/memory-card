import React, {useState} from "react";
import {Scoreboard} from "./components/Scoreboard"
import {Cards} from "./components/Cards"

function App() {

    const [cards, setCards] = useState([
        {
            id: 0,
            name: "Card0",
            clicked: false
        },
        {
            id: 1,
            name: "Card1",
            clicked: false
        },
        {
            id: 2,
            name: "Card2",
            clicked: false
        },
        {
            id: 3,
            name: "Card3",
            clicked: false
        },
        {
            id: 4,
            name: "Card4",
            clicked: false
        },
        {
            id: 5,
            name: "Card5",
            clicked: false
        },
        {
            id: 6,
            name: "Card6",
            clicked: false
        },
        {
            id: 7,
            name: "Card7",
            clicked: false
        },
    ])

    return (
        <div>
            <Scoreboard />
            <Cards cards={cards}/>
        </div>
    );
}

export default App;