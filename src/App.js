import React, {useEffect, useState} from "react";
import {Scoreboard} from "./components/Scoreboard"
import {Cards} from "./components/Cards"

function App() {

    const [cards, setCards] = useState([
        {
            id: 0,
            name: "Walter White",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Walter_White.png')]"
        },
        {
            id: 1,
            name: "Jesse Pinkman",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Jesse_Pinkman.png')]"
        },
        {
            id: 2,
            name: "Gus Fring",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Gus_Fring.png')]"
        },
        {
            id: 3,
            name: "Saul Goodman",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Saul_Goodman.png')]"
        },
        {
            id: 4,
            name: "Hank Schrader",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Hank_Schrader.png')]"
        },
        {
            id: 5,
            name: "Mike Ehrmantraut",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Mike_Ehrmantraut.png')]"
        },
        {
            id: 6,
            name: "Skyler White",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Skyler_White.png')]"
        },
        {
            id: 7,
            name: "Tuco Salamanca",
            clicked: false,
            imageUrl: "bg-[url('../public/images/Tuco_Salamanca.png')]"
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