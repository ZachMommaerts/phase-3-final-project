import { useState } from 'react'
import SongCard from './SongCard';
import Score from '/.Score';


export default function GameContainer() {
    return (
        <div>
            <Score />
            <SongCard />
            <SongCard />
        </div>
    )
}