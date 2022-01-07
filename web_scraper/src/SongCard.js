import { useEffect } from 'react';

export default function SongCard( { song, setSong, opposingSong, turnCounter, setTurnCounter, score, setScore } ) {

    useEffect(() => {
        const number = Math.floor(Math.random() * 101)

        // url is placeholder
        fetch(`http://localhost:9292/songs/${number}`)
        .then(r => r.json())
        .then(setSong)
        .then(error => alert(error))

    }, [turnCounter]);

    const handleClick = () => {
        setTurnCounter(turnCounter ++);

        // billboardScore is a placeholder
        song.currentposition > opposingSong.currentposition ? setScore(score ++) : setScore(score);
    };

    return (
        // song variables are placeholders
        <div onClick={() => handleClick()}>
            <img src={song.src} alt={song.title} />
            <h2>{song.songname}</h2>
            <h2>{song.artist}</h2>
        </div>
    )
}