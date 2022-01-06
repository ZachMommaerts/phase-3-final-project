import { useEffect } from 'react';

export default function SongCard( { song, setSong, turnCounter, setTurnCounter } ) {

    useEffect(() => {
        number = Math.floor(Math.random() * 101)

        fetch(`http://localhost:9292/songs/${number}`)
        .then(r => r.json())
        .then(setSong)
        .then(error => alert(error))

    }, [turnCounter]);

    const handleClick = () => {
        setTurnCounter(turnCounter ++);
    };

    return (
        <div onClick={() => handleClick()}>
            <img src={song.src} alt={song.title} />
            <h2>{song.title}</h2>
            <h2>{song.artist}</h2>
        </div>
    )
}