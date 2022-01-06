import { useState } from 'react'
import SongCard from './SongCard';
import Score from '/.Score';
import NameInput from './NameInput';
import TurnCounter from './TurnCounter';


export default function GameContainer() {
    const [ user, setUser ] = useState('')
    const [ songOne, setSongOne] = useState({})
    const [ songTwo, setSongTwo] = useState({})
    const [ score, setScore] = useState(0)
    const [ turnCounter, setTurnCounter] = useState(1)

    return (
        <div>
            {user === ''
                ? <NameInput 
                    user = 'user'
                    setUser = 'setUser'
                />
                : <>
                    <Score 
                        score = 'score'
                        setScore = 'setScore'
                    />
                    <TurnCounter 
                        turnCounter = 'turnCounter'
                        setTurnCounter = 'setTurnCounter'
                    />
                    <SongCard 
                        songOne = 'song' 
                        setSongOne = 'setSong'
                    />
                    <SongCard 
                        songTwo = 'song' 
                        setSongTwo = 'setSong'
                    /> 
                </>
            }
        </div>
    )
}