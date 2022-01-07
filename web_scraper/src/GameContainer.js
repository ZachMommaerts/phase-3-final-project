import { useState, useEffect } from 'react'
import SongCard from './SongCard';
import Score from './Score';
import NameInput from './NameInput';
import TurnCounter from './TurnCounter';
import Highscores from './Highscores';


export default function GameContainer() {
    const [ user, setUser ] = useState('')
    const [ songOne, setSongOne] = useState({})
    const [ songTwo, setSongTwo] = useState({})
    const [ score, setScore] = useState(0)
    const [ turnCounter, setTurnCounter] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:9292/`)
        .then(r => r.json())
        .catch(error => alert(error))

    }, []);

    if (turnCounter < 11) {
        return (
            <div>
                {user === ''
                    ? <NameInput 
                        user = {user}
                        setUser = {setUser}
                    />
                    : <>
                        <Score 
                            score = {score}
                            setScore = {setScore}
                        />
                        <TurnCounter 
                            turnCounter = {turnCounter}
                            setTurnCounter = {setTurnCounter}
                        />
                        <SongCard 
                            song = {songOne} 
                            setSong = {setSongOne}
                            opposingSong = {songTwo}
                            turnCounter = {turnCounter}
                            setTurnCounter = {setTurnCounter}
                            score = {score}
                            setScore = {setScore}
                        />
                        <SongCard 
                            song = {songTwo} 
                            setSong = {setSongTwo}
                            opposingSong = {songOne}
                            turnCounter = {turnCounter}
                            setTurnCounter = {setTurnCounter}
                            score = {score}
                            setScore = {setScore}
                        /> 
                    </>
                }
            </div>
        )
    } else {
        return (
            <Highscores 
                turnCounter = {turnCounter}
                setTurnCounter = {setTurnCounter}
            />
        )
    }

}