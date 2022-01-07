export default function NameInput( { user, setUser } ) {

    const createUser = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))

        // placeholder until backend is connected
        // setUser(e.target.username.value)
    }

    return (
        <form onSubmit={(e) => createUser(e)}>
            <label>
                Username:
                <input type='text' name='username' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}