import React, {useEffect, useState} from "react";
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

    const [score, setScore] = useState(0)

    const [highScore, setHighScore] = useState(0)

    function handleCardClick(e){
        const {id} = e.target
        let clickedCard = cards.find(card => card.id == id)
        if(clickedCard.clicked == false){
            setCards(prevState => {
                return prevState.map(card => (card.id == id) ? {...card, clicked: true} : card)
            });
            setScore(score + 1)
        } else {
            setScore(0)
            setCards(prevState => {
                return prevState.map(card => (card.clicked == true) ? {...card, clicked: false} : card)
            });
            if(score > highScore){
                setHighScore(score)  
            }
        }
        shuffleCards()
    }

    function shuffleCards(){
        setCards(prevState => {
            return(
                prevState
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
            )
        })
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div>
            <Scoreboard score={score} highScore={highScore}/>
            <Cards cards={cards} handleCardClick={handleCardClick}/>
        </div>
    );
}

export default App;