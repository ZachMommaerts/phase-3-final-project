import { useState } from 'react'
import SongCard from './SongCard';
import Score from '/.Score';
import NameInput from './NameInput';


export default function GameContainer() {
    const [ user, setUser ] = useState('')

    const createUser = (e) => {
        e.preventDefault()

        fetch('http://localhost:9292/players', {
            method: 'CREATE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.username
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))
    }

    return (
        <div>
            {user === ''
                ? <NameInput 
                    createUser='createUser'
                />
                : <>
                    <Score />
                    <SongCard />
                    <SongCard /> 
                </>
            }
        </div>
    )
}