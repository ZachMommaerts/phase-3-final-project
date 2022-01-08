export default function NameInput( { setUser } ) {

    const createUser = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/players', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))
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