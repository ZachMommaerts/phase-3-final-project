export default function TurnCounter( { turnCounter } ) {

    return (
        <div>
            {turnCounter > 10 ? <p>Turn: 10/10</p> : <p>Turn: {turnCounter}/10</p>}
        </div>
    )
}