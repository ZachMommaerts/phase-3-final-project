export default function NameInput( { user, setUser } ) {

    const createUser = (e) => {
        e.preventDefault()

        //url is placeholder
        fetch('http://localhost:9292/players', {
            method: 'CREATE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //do not believe the e.target.username is correct pathing
                'username': e.target.username
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))
    }

    return (
        <form onSubmit={() => createUser()}>
            <label>
                Username:
                <input type='text' name='username' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}