import { useEffect, useState} from 'react';
import styled from 'styled-components';

const Div = styled.div`
    padding-top: 1em;
    text-align: center;
`;

const P = styled.p`
    font-size: 1.1rem;
`;

const Button = styled.button`
    border: none;
    color: #EDEDED;
    background-color: #AA0A0A;
    font-family: 'Assistant', sans-serif;
    width: 8em;
    height: 2em;
    border-radius: .15rem;
    font-size: 1.1rem;
    &:hover {
        background-color: #ff333b;
    }
`;

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
                <P>{player.score} | {player.username.name}</P>
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
        <Div>
            <h2>You scored {score}/10!</h2>
            <h3>Highscores</h3>
            {renderPlayers}
            <Button onClick={handleRestart}>Play Again</Button>
        </Div>
    )
}