import { useEffect, useState} from 'react';

export default function Highscores( { turnCounter, setTurnCounter, score, setScore, user, setUser  }) {
    const [ players, setPlayers] = useState([])

    useEffect(() => {

        if(turnCounter > 10) {
        fetch('http://localhost:9292/leaderboards')
        .then(r => r.json())
        .then(setPlayers)
        .catch(error => alert(error))
        }

    }, [turnCounter]);

    const renderPlayers = players.map( player => {
        return (
                <p>{player.score} | {player.username.name}</p>
    )})

    const handleRestart = () => {
        fetch('http://localhost:9292/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': user
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))

        setTurnCounter(state => state = 1);
        setScore(state => state = 0)

    }

    return(
        <div>
            <p>Highscores</p>
            {renderPlayers}
            <button onClick={handleRestart}>Play Again</button>
        </div>
    )
}