import { useEffect } from 'react';

export default function TurnCounter( { turnCounter, setTurnCounter, score } ) {

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
            .catch(error => alert(error))
        }
    })

    return (
        <div>
            {turnCounter > 10 ? <p>10/10</p> : <p>{turnCounter}/10</p>}
        </div>
    )
}