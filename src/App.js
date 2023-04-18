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
        <div className="bg-amber-400 h-screen flex flex-col items-center p-10 gap-10">
            <div className="text-7xl text-white font-bold flex flex-col gap-2">
                <div className="flex flex-row">
                    <div className="bg-green-800 w-fit drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">
                        <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Br</div>
                    </div>
                    <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">eaking </div>
                </div>
                <div className="flex flex-row ml-20">
                    <div className="bg-green-800 w-fit drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">
                        <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Ba</div>
                    </div>
                    <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">d</div>
                </div>
                <div className="flex flex-row -ml-20">
                    <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Memor</div>
                    <div className="bg-green-800 w-fit drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)] w-20 flex flex-row justify-center">
                        <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Y</div>
                    </div>
                </div>
                <div className="flex flex-row ml-20">
                    <div className="bg-green-800 w-fit drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)] ">
                        <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">Ca</div>
                    </div>
                    <div className="drop-shadow-[0_5px_3.5px_rgba(0,0,0,0.8)]">rds</div>
                </div>
            </div>
            <Cards cards={cards} handleCardClick={handleCardClick}/>
            <Scoreboard score={score} highScore={highScore}/>
        </div>
    );
}

export default App;