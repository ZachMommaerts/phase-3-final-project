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
        <div>
            <h2>How to Play:</h2>
            <ul>Two songs from the weekly Billboard 100 will be shown on either side of the screen</ul>
            <ul>Click whichever song you believe is currently rated higher</ul>
            <ul>If you do well enough you might even see your name up on the leaderboards</ul>
            <form onSubmit={(e) => createUser(e)}>
                <label>
                    Username:
                    <input type='text' name='username' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}