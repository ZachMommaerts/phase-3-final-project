import styled from 'styled-components';
import { useState, useEffect } from 'react'
import SongCard from './SongCard';
import Score from './Score';
import NameInput from './NameInput';
import TurnCounter from './TurnCounter';
import Highscores from './Highscores';

const Arena = styled.div`
    margin-top: -1rem;
    margin-right: 25rem;
    margin-left: 25rem;
    height: 65vh;
    background-color: #EDEDED;
    border: 1.5rem;
    border-top: 0;
    border-style: solid;
    border-color: #AA0A0A;
    border-radius: 0 0 1rem 1rem;
`;

const TopBar = styled.div`
    background-color: #1C1C1C;
    display: flex;

`;

const Divider = styled.div`
    background-color: black;
    height: 1rem;

`;

const SongContainer = styled.div`
    display: flex;
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
                        <TopBar>
                            <Score 
                                score = {score}
                            />
                            <TurnCounter 
                                turnCounter = {turnCounter}
                            />
                        </TopBar>
                        <SongContainer>
                            <SongCard 
                                song = {songOne} 
                                setSong = {setSongOne}
                                opposingSong = {songTwo}
                                turnCounter = {turnCounter}
                                setTurnCounter = {setTurnCounter}
                                score = {score}
                                setScore = {setScore}
                            />
                            <Divider />
                            <SongCard 
                                song = {songTwo} 
                                setSong = {setSongTwo}
                                opposingSong = {songOne}
                                turnCounter = {turnCounter}
                                setTurnCounter = {setTurnCounter}
                                score = {score}
                                setScore = {setScore}
                            />
                        </SongContainer> 
                    </>
                }
            </Arena>
        )
    } else {
        return (
            <Arena>
                <Highscores 
                    turnCounter = {turnCounter}
                    setTurnCounter = {setTurnCounter}
                    score = {score}
                    setScore = {setScore}
                    user = {user}
                />
            </Arena>
        )
    }

}