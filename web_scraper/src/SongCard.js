import { useEffect } from 'react';

export default function SongCard( { song, setSong, opposingSong, turnCounter, setTurnCounter, score, setScore } ) {

    useEffect(() => {
        fetch('http://localhost:9292/random_song')
        .then(r => r.json())
        .then(setSong)
        .catch(error => alert(error))

    }, [turnCounter]);

    const handleClick = () => {
        setTurnCounter(state => state = turnCounter ++);

        if(song.currentposition > opposingSong.currentposition) {
            setScore(state => state = score ++)
        }
    };

    return (
        <div onClick={handleClick}>
            <h2>{song.songname}</h2>
            <h2>{song.artist}</h2>
        </div>
    )
}