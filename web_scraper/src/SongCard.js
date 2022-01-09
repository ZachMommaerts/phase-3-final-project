import { useEffect } from 'react';
import styled from 'styled-components';

const Div1 = styled.div`
    width: 50%;
    height: 24.4em; 
    padding-top: 10em;
    text-align: center;
    background-color:#0AAAAA;
    padding: 1 rem;
    &:hover{
        background-color: #16cce0;
    }
`;

const Div2 = styled.div`
    width: 50%;
    height: 24.4em;
    padding-top: 10em; 
    text-align: center;
    background-color:#5aaa0a;
    padding: 1 rem;
    &: hover{
        background-color: #71db1b;
    }
`;

export default function SongCard( { song, setSong, opposingSong, turnCounter, setTurnCounter, score, setScore, isLeft } ) {

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
    
    if(isLeft === true) {
        return (
            <Div1 onClick={handleClick}>
                <h2>{song.songname}</h2>
                <h3>{song.artist}</h3>
            </Div1>
        )
    } else {
        return (
            <Div2 onClick={handleClick}>
                <h2>{song.songname}</h2>
                <h3>{song.artist}</h3>
            </Div2>
        )
    }
}