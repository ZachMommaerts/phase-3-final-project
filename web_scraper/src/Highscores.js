import { useEffect, useState} from 'react';

export default function Highscores( { turnCounter, setTurnCounter, score, setScore, user }) {
    const [ players, setPlayers] = useState([])
    
    useEffect(() => {

        if(turnCounter === 11) {
            fetch('http://localhost:9292/update_score', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'score': score
                })
            })
            .then(r => r.json())
            .then(score => console.log(score))
            .catch(error => alert(error))
        }

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
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': user.name
            })
        })
        .then(r => r.json())
        .catch(error => alert(error))

        setTurnCounter(state => state = 1);
        setScore(state => state = 0)

    }

    return(
        <div>
            <h2>You scored {score}/10!</h2>
            <p>Highscores</p>
            {renderPlayers}
            <button onClick={handleRestart}>Play Again</button>
        </div>
    )
}