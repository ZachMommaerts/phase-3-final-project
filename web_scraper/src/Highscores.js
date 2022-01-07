import { useEffect, useState} from 'react';

export default function Highscores( { turnCounter, setTurnCount  }) {
    const [ players, setPlayers] = useState({})

    useEffect(() => {

        if(turnCounter === 11) {
        //url is placeholder
        fetch('http//localhost:9292/leaderboards')
        .then(r => r.json())
        .then(setPlayers)
        .catch(error => alert(error))
        }

    }, [turnCounter]);

    const renderPlayers = players.map( player => { 
        return (
            <>
                <p>{player.name}</p>
                <p>{player.score}</p>
            </>
    )})

    return(
        <div>
            <p>Highscores</p>
            {renderPlayers}
            <button>Play Again</button>
        </div>
    )
}