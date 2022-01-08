import styled from 'styled-components';
import { useState, useEffect } from 'react'
import SongCard from './SongCard';
import Score from './Score';
import NameInput from './NameInput';
import TurnCounter from './TurnCounter';
import Highscores from './Highscores';

const Arena = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

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
            <Arena>
                {user === ''
                    ? <NameInput 
                        setUser = {setUser}
                    />
                    : <>
                        <Score 
                            score = {score}
                        />
                        <TurnCounter 
                            turnCounter = {turnCounter}
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
            </Arena>
        )
    } else {
        return (
            <Highscores 
                turnCounter = {turnCounter}
                setTurnCounter = {setTurnCounter}
                score = {score}
                setScore = {setScore}
                user = {user}
            />
        )
    }

}