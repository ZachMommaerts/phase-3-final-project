import { useState } from 'react'
import SongCard from './SongCard';
import Score from '/.Score';
import NameInput from './NameInput';


export default function GameContainer() {
    const [ user, setUser ] = useState(false)
    
    return (
        <div>
            {!user
                ? <NameInput />
                : <>
                    <Score />
                    <SongCard />
                    <SongCard /> 
                </>
            }
        </div>
    )
}